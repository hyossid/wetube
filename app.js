import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import bodyparser from "body-parser"
import cookieparser from "cookie-parser"
import userRouter from "./Routers/userRouter"
import videoRouter from "./Routers/videoRouter"
import globalRouter from "./Routers/globalRouter"

const app = express();

// const handleHome=(req,res)=>{
//     console.log("Hi from Ass");
//  //   console.log(req);
//     res.send("Hello from Home");
// }
// const handleProfile=(req,res)=>{
//     res.send("You are on my Profile");
// }

// const handleBetween=(req,res,next)=>{
//     console.log("Between Middleware");
//     next();
// }

app.use(bodyparser.json());     //서버가 <body>에서 json 형식을 읽어올수 있도록
app.use(bodyparser.urlencoded({extended: true})); //서버가 <body>에서 urlencoded 형식을 읽어올수 있도록
app.use(cookieparser());
app.use(helmet());
app.use(morgan("dev")); //morgan이 모든것을 다 logging할것임.

//app.get("/",handleBetween,handleHome);

//app.get("/profile",handleProfile);        //MVC 에 의하면 허용될 수 없는 코드임.

app.use("/",globalRouter);          //For login/search 등의 user 독립적인 부분을 처리하기위한 것. 오직 URL만 관여함.
app.use("/user",userRouter);
app.use("/video",videoRouter);

//app.listen(PORT,handleListener);   //4000번 포트

export default app;