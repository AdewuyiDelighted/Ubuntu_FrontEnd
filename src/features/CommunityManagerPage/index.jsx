import style from "./index.module.css"
import addCohortIcon from "../../asset/communityManger/addCohortIcon1-removebg-1.png"
import addStudentIcon from "../../asset/communityManger/addStudentIcon-removebg-preview.png"
import removeStudentIcon from "../../asset/communityManger/removeAStudentIcon-removebg-preview.png"
import addEventIcon from "../../asset/communityManger/addEventIcon-removebg-preview.png"
import updateEventIcon from "../../asset/communityManger/updateImageIcon-removebg-preview.png"
import deleteEventIcon from "../../asset/communityManger/deleteEventIcon-removebg-preview.png"
import FilledButton from "../../components/reuseables/FilledButton";

const CommunityManagerPage = () => {
    return (
        <div className={style.main}>

            <div className={style.heading}>
                <p className={style.headingText}>Community Manager View</p>
            </div>

            <div className={style.tasks}>
                <div className={style.addCohort}>
                    <img src={addCohortIcon} alt={"icon"} className={style.icon}/>
                    <p className={style.iconText}>Add <br/>Cohort</p>
                    <FilledButton textColor={"#38516D"} backgroundColor={"#FF2E2E"} text={""}/>
                </div>

                <div className={style.addStudents}>
                    <img src={addStudentIcon} className={style.icon2} alt={"icon"}/>
                    <p className={style.iconText}>Add <br/>Student(s)</p>
                    <FilledButton textColor={"#38516D"} backgroundColor={"#FF2E2E"} text={"+"}/>
                </div>

                <div className={style.removeStudent}>
                    <img src={removeStudentIcon} className={style.icon3} alt={"icon"}/>
                    <p className={style.iconText}>Remove A <br/>Student</p>
                    <FilledButton textColor={"#38516D"} backgroundColor={"#FF2E2E"} text={"+"}/>
                </div>


                <div className={style.postEvent}>
                    <img src={addEventIcon} className={style.icon3} alt={"icon"}/>
                    <p className={style.iconText}>Post Upcoming <br/>Event</p>
                    <FilledButton textColor={"#38516D"} backgroundColor={"#FF2E2E"} text={"+"}/>
                </div>

                <div className={style.updateEvent}>
                    <img src={updateEventIcon} className={style.icon3} alt={"icon"}/>
                    <p className={style.iconText}>Update Posted <br/>Event</p>
                    <FilledButton textColor={"#38516D"} backgroundColor={"#FF2E2E"} text={"+"}/>

                </div>

                <div className={style.deleteEvent}>
                    <img src={deleteEventIcon} className={style.icon} alt={"icon"}/>
                    <p className={style.iconText}>Delete Posted <br/>Event</p>
                    <FilledButton textColor={"#38516D"} backgroundColor={"#FF2E2E"} text={"+"}/>

                </div>

            </div>
        </div>
    )
}
export default CommunityManagerPage;