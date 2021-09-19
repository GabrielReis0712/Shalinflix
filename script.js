var linkParaAssistirOsFilmes = [
  "https://redecanais.re/space-jam-um-novo-legado-dublado-2021-1080p_b371ffa61.html",
  
  "https://redecanais.re/gente-grande-dublado-2010-1080p_e2e572463.html",
  
  "https://redecanais.re/gente-grande-2-dublado-2013-1080p_9bae2bd29.html"
];

var listaFilmes = 
["https://scontent.fssa7-1.fna.fbcdn.net/v/t1.6435-9/118230307_1414624435393392_7598053172179742974_n.jpg?_nc_cat=104&amp;ccb=1-5&amp;_nc_sid=8bfeb9&amp;_nc_ohc=xvidlWAqZ9IAX_TFaZF&amp;_nc_ht=scontent.fssa7-1.fna&amp;oh=61b2be6755d5039b5d090628476eb820&amp;oe=616D64D7", 
 
"https://upload.wikimedia.org/wikipedia/pt/d/d6/Grown_Ups.jpg", 

 "https://i.pinimg.com/originals/e3/d2/64/e3d264db8f6b378008ad952325eabeef.jpg"];

for (var i = 0; i < linkParaAssistirOsFilmes.length; i++) {
  document.write(
    "<a href=" +
      "'" +
      linkParaAssistirOsFilmes[i] +
      "'" +
      " target='_blank'><figure class='teste'>" +
      "<img src=" +
      listaFilmes[i] +
      "></figure></a>"
  );
}