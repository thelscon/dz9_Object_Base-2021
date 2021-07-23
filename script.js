'use strict' ;

const PERMISSION_GANDER = [ 'male' , 'female' , 'non-binary' , 'transgender' , 'intersex' , 'n/a' ] ;

const secretFunctionName = function ( currentValue ) {
    let value ;
    return function ( currentValue ) { 
        if ( currentValue !== undefined ) value = currentValue.trim() ;
        return value ;
    } ;
}
const _name = secretFunctionName () ;

const secretFunctionAge = function ( currentValue ) {
    let value ;
    return function ( currentValue ) { 
        if ( currentValue !== undefined ) {
            currentValue = parseInt ( currentValue ) ;
            if( currentValue > 0 && currentValue <= 120 ) {
                value = currentValue ;
            }
        } 
        return value ;
    } ;
}
const _age = secretFunctionAge () ;

const secretFunctionGander = function ( currentValue ) {
    let value ;
    return function ( currentValue ) { 
        if ( currentValue !== undefined ) {
            currentValue = currentValue.trim().toLowerCase() ;
            if( PERMISSION_GANDER.includes( currentValue ) ) value = currentValue ;
        } 
        return value ;
    } ;
}
const _gander = secretFunctionGander () ;

const newPerson = {

    _name : _name() ,    
    get name() {
        return this._name ;
    } ,
    set name ( value ) {
        this._name = value.trim () ;
    } ,

    _age : _age() ,
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

    _gander : _gander() ,
    get gander()  {
        return this._gander ;
    } ,
    set gander( value ) {
        value = value.trim().toLowerCase() ;
        if( PERMISSION_GANDER.includes( value ) ) this._gander = value ;
    }

}

Object.defineProperties ( newPerson , {
    'name' : {
        enumerable : false ,
        configurable : false
    } ,
    'age' : {
        enumerable : false ,
        configurable : false
    } ,
    'gander' : {
        enumerable : false ,
        configurable : false
    }
} ) ;

newPerson.name = ' bob' ;
newPerson.gander = ' Male' ;
newPerson.age = 120 ;
console.dir ( newPerson ) ;

/* Object.defineProperty ( newPerson , 'age' , { //нельзя изменить поле объекта age
    configurable : true ,
    value : '121'
} ) ;
console.log ( newPerson ) ;  */