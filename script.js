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

const newPerson = Object.defineProperties ( {} , {
    'name' : {
        get : function () { return _name () } ,
        set : function ( value ) { _name ( value ) } ,
        enumerable : false ,
        configurable : false
    } ,
    'age' : {
        get : function () { return _age () } ,
        set : function ( value ) { _age ( value ) } ,
        enumerable : false ,
        configurable : false
    } ,
    'gander' : {
        get : function () { return _gander () } ,
        set : function ( value ) { _gander ( value ) } ,
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