$(()=>{

    $.ajax({
        url:`https://swapi.co/api/films`
    }).then(
        (data)=>{
            Episode1.push(data.results[2]);
            Episode2.push(data.results[1]);
            Episode3.push(data.results[3]);
            Episode4.push(data.results[0]);
            Episode5.push(data.results[5]);
            Episode6.push(data.results[4]);
            Episode7.push(data.results[6]);  
        },
        ()=>{
            console.log('bad request');
        }
    );
    const Episode1=[];
    const Episode2=[];
    const Episode3=[];
    const Episode4=[];
    const Episode5=[];
    const Episode6=[];
    const Episode7=[];
    
    function urlSearch(url){
        $.ajax({
            url: url
        }).then(
            (data)=>{
                getCharInfo(data)
            },
            ()=>{
                console.log('bad request');
            }
        );
    }
    
    function getCharInfo(data){
        let name
        name = data.name
        console.log(data)
        let $li = $('<button>')
        $li.text(name).appendTo($('#characterList'))
    }
    
    $('.Episode1').on("click", function(e){
        $('#characterList').empty()
        console.log($('#characterList').children().length)
        e.preventDefault();
        console.log($('#characterList').children().length)
        $('.infoScreen').empty()
        $('.infoScreen').append(`<h1>${Episode1[0].title}`)
        $('.infoScreen').append(`<p>Released: ${Episode1[0].release_date}/ Directed by: ${Episode1[0].director}`)
        $('.infoScreen').append(`<button>Characters`).attr("id","characterButton")
        $('.mainScreen').attr('src',"https://giphy.com/embed/3owzVXoDN8iP0w3T68")
        $('#characterButton').on("click", function(e){
            $('#characterList').empty()
            for (i = 0; i < Episode1[0].characters.length; i++){
                urlSearch(Episode1[0].characters[i])      
        }   
    })})
    
    $('.Episode2').on("click", function(e){
        $('#characterList').empty()
        console.log($('#characterList').children().length)
        e.preventDefault();
        console.log($('#characterList').children().length)
        $('.infoScreen').empty()
        $('.infoScreen').append(`<h1>${Episode2[0].title}`)
        $('.infoScreen').append(`<p>Released: ${Episode2[0].release_date}/ Directed by: ${Episode2[0].director}`)
        $('.infoScreen').append(`<button>Characters`).attr("id","characterButton")
        $('.mainScreen').attr('src',"https://giphy.com/embed/l1Kst3WE3rg2WRHxu")
        $('#characterButton').on("click", function(e){
            $('#characterList').empty()
            for (i = 0; i < Episode2[0].characters.length; i++){
                urlSearch(Episode2[0].characters[i])      
        }   
    })})
    $('.Episode3').on("click", function(e){
        $('#characterList').empty()
        console.log($('#characterList').children().length)
        e.preventDefault();
        console.log($('#characterList').children().length)
        $('.infoScreen').empty()
        $('.infoScreen').append(`<h1>${Episode3[0].title}`)
        $('.infoScreen').append(`<p>Released: ${Episode3[0].release_date}/ Directed by: ${Episode3[0].director}`)
        $('.infoScreen').append(`<button>Characters`).attr("id","characterButton")
        $('.mainScreen').attr('src',"https://giphy.com/embed/3o84sq21TxDH6PyYms")
        $('#characterButton').on("click", function(e){
            $('#characterList').empty()
            for (i = 0; i < Episode3[0].characters.length; i++){
                urlSearch(Episode3[0].characters[i])      
        }   
    })})
    $('.Episode4').on("click", function(e){
        $('#characterList').empty()
        console.log($('#characterList').children().length)
        e.preventDefault();
        console.log($('#characterList').children().length)
        $('.infoScreen').empty()
        $('.infoScreen').append(`<h1>${Episode4[0].title}`)
        $('.infoScreen').append(`<p>Released: ${Episode4[0].release_date}/ Directed by: ${Episode4[0].director}`)
        $('.infoScreen').append(`<button>Characters`).attr("id","characterButton")
        $('.mainScreen').attr('src',"https://giphy.com/embed/3o84sJXOIrnjvlwnF6")
        $('#characterButton').on("click", function(e){
            $('#characterList').empty()
            for (i = 0; i < Episode4[0].characters.length; i++){
                urlSearch(Episode4[0].characters[i])      
        }   
    })})
    $('.Episode5').on("click", function(e){
        $('#characterList').empty()
        console.log($('#characterList').children().length)
        e.preventDefault();
        console.log($('#characterList').children().length)
        $('.infoScreen').empty()
        $('.infoScreen').append(`<h1>${Episode5[0].title}`)
        $('.infoScreen').append(`<p>Released: ${Episode5[0].release_date}/ Directed by: ${Episode5[0].director}`)
        $('.infoScreen').append(`<button>Characters`).attr("id","characterButton")
        $('.mainScreen').attr('src',"https://giphy.com/embed/xT9DPpf0zTqRASyzTi")
        $('#characterButton').on("click", function(e){
            $('#characterList').empty()
            for (i = 0; i < Episode5[0].characters.length; i++){
                urlSearch(Episode5[0].characters[i])      
        }   
    })})
    $('.Episode6').on("click", function(e){
        $('#characterList').empty()
        console.log($('#characterList').children().length)
        e.preventDefault();
        console.log($('#characterList').children().length)
        $('.infoScreen').empty()
        $('.infoScreen').append(`<h1>${Episode6[0].title}`)
        $('.infoScreen').append(`<p>Released: ${Episode6[0].release_date}/ Directed by: ${Episode6[0].director}`)
        $('.infoScreen').append(`<button>Characters`).attr("id","characterButton")
        $('.mainScreen').attr('src',"https://giphy.com/embed/2SRvACIOCEOys")
        $('#characterButton').on("click", function(e){
            $('#characterList').empty()
            for (i = 0; i < Episode6[0].characters.length; i++){
                urlSearch(Episode6[0].characters[i])      
        }   
    })})
    $('.Episode7').on("click", function(e){
        $('#characterList').empty()
        console.log($('#characterList').children().length)
        e.preventDefault();
        console.log($('#characterList').children().length)
        $('.infoScreen').empty()
        $('.infoScreen').append(`<h1>${Episode7[0].title}`)
        $('.infoScreen').append(`<p>Released: ${Episode7[0].release_date}/ Directed by: ${Episode7[0].director}`)
        $('.infoScreen').append(`<button>Characters`).attr("id","characterButton")
        $('.mainScreen').attr('src',"https://giphy.com/embed/3owzVYjZSzuFivWpHi")
        $('#characterButton').on("click", function(e){
            $('#characterList').empty()
            for (i = 0; i < Episode7[0].characters.length; i++){
                urlSearch(Episode7[0].characters[i])      
        }   
    })})
    
    //For $(()=>{ 
    })