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
        let $li = $('<p>')
        //$('#characterButton').empty();
        $li.text(name).appendTo($('#characterButton'))
    }
    
    $('.Episode1').on("click", function(e){
        console.log($('#characterButton').children().length)
        e.preventDefault();
        $('#characterButton').empty()
        console.log($('#characterButton').children().length)
        $('.infoScreen').empty()
        $('.infoScreen').append(`<h1>${Episode1[0].title}`)
        $('.infoScreen').append(`<p>Released: ${Episode1[0].release_date}/ Directed by: ${Episode1[0].director}`)
        $('.infoScreen').append(`<button>Characters`).attr("id","characterButton")
        $('.mainScreen').remove()
        
    
        $('.main').prepend('<iframe src="https://giphy.com/embed/3owzVXoDN8iP0w3T68" width="480" height="208" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/starwars-star-wars-the-phantom-menace-3owzVXoDN8iP0w3T68">via GIPHY</a></p>')
        $('#characterButton').on("click", function(e){
            //e.preventDefault();
            for (i = 0; i < Episode1[0].characters.length; i++){
                //console.log(Episode1[0].characters[i])
                urlSearch(Episode1[0].characters[i])
                //console.log(name)        
        }   
    })})
    
    $('.Episode2').on("click", function(e){
        e.preventDefault();
        $('#characterButton').empty()
        $('.infoScreen').empty()
        //console.log(Episode2)
        $('.infoScreen').append(`<h1>${Episode2[0].title}`)
        $('.infoScreen').append(`<p>Released: ${Episode2[0].release_date}/ Directed by: ${Episode2[0].director}`)
        $('.infoScreen').append(`<button>Characters`).attr("id","characterButton")
        $('.mainScreen').text('src',"https://youtu.be/MrDStqPgOEU")
        $('#characterButton').on("click", function(e){
            //e.preventDefault();
            for (i = 0; i < Episode2[0].characters.length; i++){
                //console.log(Episode2[0].characters[i])
                urlSearch(Episode2[0].characters[i])
                //console.log(name)      
        }   
    })})
    $('.Episode3').on("click", function(e){
        e.preventDefault();
        $('#characterButton').empty()
        $('.infoScreen').empty()
        console.log(Episode3)
        $('.infoScreen').append(`<h1>${Episode3[0].title}`)
        $('.infoScreen').append(`<p>Released: ${Episode3[0].release_date}/ Directed by: ${Episode3[0].director}`)
        $('.infoScreen').append(`<button>Characters`).attr("id","characterButton")
        $('.mainScreen').text('src',"https://youtu.be/MrDStqPgOEU")
        $('#characterButton').on("click", function(e){
            //e.preventDefault();
            for (i = 0; i < Episode3[0].characters.length; i++){
                //console.log(Episode2[0].characters[i])
                urlSearch(Episode3[0].characters[i])
                //console.log(name)      
        }   
    })})
    $('.Episode4').on("click", function(e){
        e.preventDefault();
        $('#characterButton').empty()
        $('.infoScreen').empty()
        console.log(Episode4)
        $('.infoScreen').append(`<h1>${Episode4[0].title}`)
        $('.infoScreen').append(`<p>Released: ${Episode4[0].release_date}/ Directed by: ${Episode4[0].director}`)
        $('.infoScreen').append(`<button>Characters`).attr("id","characterButton")
        $('.mainScreen').text('src',"https://youtu.be/MrDStqPgOEU")
        $('#characterButton').on("click", function(e){
            //e.preventDefault();
            for (i = 0; i < Episode4[0].characters.length; i++){
                //console.log(Episode2[0].characters[i])
                urlSearch(Episode4[0].characters[i])
                //console.log(name)      
        }   
    })})
    $('.Episode5').on("click", function(e){
        e.preventDefault();
        $('#characterButton').empty()
        $('.infoScreen').empty()
        console.log(Episode5)
        $('.infoScreen').append(`<h1>${Episode5[0].title}`)
        $('.infoScreen').append(`<p>Released: ${Episode5[0].release_date}/ Directed by: ${Episode5[0].director}`)
        $('.infoScreen').append(`<button>Characters`).attr("id","characterButton")
        $('.mainScreen').text('src',"https://youtu.be/MrDStqPgOEU")
        $('#characterButton').on("click", function(e){
            //e.preventDefault();
            for (i = 0; i < Episode5[0].characters.length; i++){
                //console.log(Episode2[0].characters[i])
                urlSearch(Episode5[0].characters[i])
                //console.log(name)      
        }   
    })})
    $('.Episode6').on("click", function(e){
        e.preventDefault();
        $('#characterButton').empty()
        $('.infoScreen').empty()
        console.log(Episode6)
        $('.infoScreen').append(`<h1>${Episode6[0].title}`)
        $('.infoScreen').append(`<p>Released: ${Episode6[0].release_date}/ Directed by: ${Episode6[0].director}`)
        $('.infoScreen').append(`<button>Characters`).attr("id","characterButton")
        $('.mainScreen').text('src',"https://youtu.be/MrDStqPgOEU")
        $('#characterButton').on("click", function(e){
            //e.preventDefault();
            for (i = 0; i < Episode6[0].characters.length; i++){
                //console.log(Episode2[0].characters[i])
                urlSearch(Episode6[0].characters[i])
                //console.log(name)      
        }   
    })})
    $('.Episode7').on("click", function(e){
        e.preventDefault();
        $('#characterButton').empty()
        $('.infoScreen').empty()
        console.log(Episode7)
        $('.infoScreen').append(`<h1>${Episode7[0].title}`)
        $('.infoScreen').append(`<p>Released: ${Episode7[0].release_date}/ Directed by: ${Episode7[0].director}`)
        $('.infoScreen').append(`<button>Characters`).attr("id","characterButton")
        $('.mainScreen').text('src',"https://youtu.be/MrDStqPgOEU")
        $('#characterButton').on("click", function(e){
            //e.preventDefault();
            for (i = 0; i < Episode7[0].characters.length; i++){
                //console.log(Episode2[0].characters[i])
                urlSearch(Episode7[0].characters[i])
                //console.log(name)      
        }   
    })})
    
    //For $(()=>{ 
    })