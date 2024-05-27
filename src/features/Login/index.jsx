import style from "./index.module.css"

import images from "../../asset/login/ourCommunity.jpg"
import FilledButton from "../../components/reuseables/FilledButton";

const Login = () => {

    return (
        <div className={style.main}>
            <img src={images} alt={"login"} width={"45%"} height={"600vh"}/>

            <div className={style.form}>

                <p className={style.welcome}>Welcome !</p>
                <p className={style.login}>Sign in to stay connected with the most prestigious community</p>

                <form className={style.formInfo}>
                    <input type={"text"} placeholder={"Email:"} className={style.loginInfo}></input>
                    <input type={"text"} placeholder={"Password:"} className={style.loginInfo}></input>
                </form>
                <div className={style.button}>
                    <FilledButton textColor={"#000000"} backgroundColor={"#3498db"} text={"Login"}/>
                </div>

            </div>
        </div>
    )

}

export default Login