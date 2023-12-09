import UrlapView from "../View/UrlapView.js"
import UrlapModel from "../model/UrlapModel.js"

export default class UrlapController {
    constructor(){
        const dataService = new UrlapModel()
        new UrlapView($(".urlap"))

        dataService.getData("tablas", this.megjelenit)

        $(window).on("ujAdatHozzaadasa", (event)=>{
            dataService.postData("tablas", event.detail)
        })
    }
}