/**
    @file   : server.ts
    @author : Xiao Ling <lingxiao@seas.upenn.edu>
    @date   : 1/23/2018
*/
import * as bodyParser   from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express      from "express";
import * as logger       from "morgan" ; 
import * as path         from "path"   ;
import errorHandler   = require("errorhandler")   ;
import methodOverride = require("method-override");

import index from './routes/index';

/**
 *  
 * A server class
 * @class Server
 *
*/
export class Server {

    public app : express.Application;

    /**
     * 
     * @class Server
     * @method boostrap
     * @static 
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     *
    */
    public static bootstrap() : Server {
        return new Server();
    }

    /**
     * constructor
     * 
     * @class Server
     * @constructor
     *
    */
    constructor(){

        // initialize the application and configure it
        this.app = express();
        this.config();
        // this.api();
    }

    /**
     * configure the app with approrpriate middle ware + routes
     * 
     * @class Server
     * @method config
     *
    */
    public config() {

        /**
            add static path
            note this will move path/to/project/public 
            directory into path/to/project/dist/public directory            
        */
        this.app.use(express.static(path.join(__dirname, "public")));

        // configure pug
        this.app.set("views", path.join(__dirname, "public"));
        this.app.set("view engine", "pug");

        // use logger middlware
        this.app.use(logger("dev"));

        // use json form parser middleware
        this.app.use(bodyParser.json());
     
        // use query string parser middlware
        this.app.use(bodyParser.urlencoded({ extended: true }));

        // use cookie parser middleware
        this.app.use(cookieParser("SECRETE_CODE"))

        // use overide middleware 
        this.app.use(methodOverride());

        // catch 404 and forward to handler
        this.app.use(function( err: any
                             , req: express.Request
                             , res: express.Response
                             , next: express.NextFunction) {
          err.status = 404;
          next(err);

        });

        // error handling
        this.app.use(errorHandler());

        // set router
        this.app.use('/', index);
    }


    /**
     * create REST API routes
     * 
     * @class Server
     * @method api
     * @todo: implement this
     *
    */
    public api() {}


}











