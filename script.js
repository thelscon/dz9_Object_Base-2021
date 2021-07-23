'use strict' ;

const PERMISSION_GANDER = [ 'male' , 'female' , 'non-binary' , 'transgender' , 'intersex' , 'n/a' ] ;

const newPerson = {

    _name : undefined ,    
    get name() {
        return this._name ;
    } ,
    set name ( value ) {
        this._name = value.trim () ;
    } ,

    _age : undefined ,
    get age() {
        return this._age ;
    } ,
    set age( value ) {
        if( parseInt( value ) ) {
            value = parseInt( value ) ;
            if( value > 0 && value <= 120 )
                this._age = value ;                
        }
    } ,

    _gander : undefined ,
    get gander()  {
        return this._gander ;
    } ,
    set gander( value ) {
        value = value.trim().toLowerCase() ;
        if( PERMISSION_GANDER.includes( value ) ) this._gander = value ;
    }

}

Object.defineProperty ( newPerson , 'name' , {
    enumerable : false ,
    configurable : false
} ) ;

Object.defineProperty ( newPerson , 'age' , {
    enumerable : false ,
    configurable : false
} ) ;

Object.defineProperty ( newPerson , 'gander' , {
    enumerable : false ,
    configurable : false
} ) 

newPerson.name = ' bob' ;
newPerson.gander = ' Male' ;
newPerson.age = 120 ;
console.dir ( newPerson ) ;

/* Object.defineProperty ( newPerson , 'age' , { //нельзя изменить поле объекта age
    configurable : true ,
    value : '121'
} ) ;
console.log ( newPerson ) ;  */