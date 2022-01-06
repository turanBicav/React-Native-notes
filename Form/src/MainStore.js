import {observable , action, makeAutoObservable, autorun, reaction, when, computed } from "mobx";
class MainStore{


    constructor(){
        makeAutoObservable(this);
       /* autorun(()=>{
            alert(this.surname);
        });*/

        /*reaction(()=>this.name,name=>{
            if(name== 'Turaran'){
                alert('kaç kaç');
            }
        })*/

        when(()=> this.name =='Turaran',()=>alert('kaçma dur'));
    }

    @observable name = 'TURAN';
    @observable surname='BİCAV';

    @action getName(){
        return this.name,this.surname;
        
    }

    @action setData(name,surname){
        this.name=name;
        this.surname=surname;

    }

    @computed get fullName(){
        return `${this.name} ${this.surname}`
    }

}
export default new MainStore();