const form = document.querySelector('form')


form.addEventListener('submit',function(e){
    e.preventDefault()
    console.log("button clickeed")
    const Height=parseInt(document.querySelector('#Height').value);
    const Weight=parseInt(document.querySelector('#Weight').value);
    const result=document.querySelector('#result');

    console.log(Height)
    console.log(Weight)

    if(Height===''|| Height<0|| isNaN(Height)){
    result.innerHTML=`Please give a valid height ${Height}`
    }
    else if(Weight===''|| Weight<0|| isNaN(Weight)){
    result.innerHTML=`Please give a valid weight ${Weight}`
    }
    else{
    const bmi=(Weight/((Height*Height)/10000)).toFixed(2);
    // show the result
    result.innerHTML=`<span>${bmi}</span>`;
    }


});
