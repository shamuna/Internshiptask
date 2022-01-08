const articles = [["New genes from old: asymmetric divergence of genes duplicates and the evolution of development",['genes','duplicates'],"journal"],

["Resurrection from lethal knockouts: Bypass of genes essentiality",['humans','genes'],"journal"],

["Engineered genes circuits",['biotechnology','mutations'],"journal"],
["Breast cancer genes: beyond BRCA1 and BRCA2",['cancer','breast'],"journal"],
["Genes therapy for lung cancer: practice and promise",['therapy','cancer'],"google"],
["Genes amplification as a target for cancer chemotherapy",['cancer','chemotherapy'],"conferance"],
["Genes therapy progress and prospects: transcription regulatory systems",['therapy','mutations','humans'],"conferance"],
["Resistance genes dependent plant defense responses",['bacterial','plants'],"google"],
["Genes delivery by lentivirus vectors an overview",['humans','genes','hiv'],"google"],
["Approaches to genes transfer in keratinocytes",['keratinocytes','humans','genes'],"google"]]


const newarray=[]
const container = document.getElementById('main');
const dsearch = document.getElementById("detail-search")

dsearch.addEventListener("click", () =>{
  
   
    event.preventDefault(); 
    
    const articlediv = document.getElementById('article')
  articlediv.innerHTML=""
    articlediv.style.width="100%"
    articlediv.style.marginTop="50px"
    
    articlediv.style.color="blue"
    
    const ul=document.createElement('ul');
    
    articlediv.appendChild(ul)
let i=0;
let j=0;
let c=0;
let g=0;
let a=0;
   let b=0;
   let q=0;
   let d=0;
   let e=0;
   let f=0;
   let r=0;
   let h=0;
   let p=0;
   let z=0;
   let k=0;
   let l=0;
   let m=0;

   let y=0;
while (i < articles.length) {
   let position=articles[i][0].toLowerCase().search(document.getElementById('given').value.toLowerCase())
  
   if (position!==-1)
   {
    const li=document.createElement('li');

    ul.appendChild(li);
    li.innerHTML= articles[i][0]
    newarray.push(articles[i][0])

    while (y <articles[i][1].length ){
      switch (articles[i][1][y]){
        case 'genes':
        a++
        break;
           case 'duplicates':
             b++
             break;
           case 'humans':
             q++
             break;
          case 'biotechnology':
             d++
             break;
          case 'mutations':
             e++
             break;
          case 'cancer':
             f++
             break;
          case 'breast':
             r++
             break;
         case 'therapy':
             h++
             break;
         case 'chemotherapy':
             p++
             break;
          case 'bacterial':
             z++
             break;
          case 'plants':
             k++
             break;
         case 'hiv':
             l++
             break;
           
          default:
             m++;
            }
          y++ 
         }
         
         
         if(articles[i][2]==="journal")
         {
             j++
            
         }
      else if(articles[i][2]==="conferance")
       {
          c++
          
         }
         else{
             g++
             
         }
  
   
   }
i++
}

var tot=100/j+c+g


var mxValues = ["journal", "conferance", "google"];
var myValues = [j*tot,c*tot,g*tot];
var mbarColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  
];

new Chart("mChart", {
  type: "pie",
  data: {
    labels: mxValues,
    datasets: [{
      backgroundColor: mbarColors,
      data: myValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Distribution Of Articles Publications "
    }
  }
  });
  var nxValues = ["genes", "duplicates", "humans","biotechnology","mutations","cancer","breast","therapy","chemotherapy","bacterial","plants","hiv"];
var nyValues = [a,b,q,d,e,f,r,h,p,z,k,l,m];
var nbarColors = [
  "#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970"
];

new Chart("nChart", {
  type: "pie",
  data: {
    labels: nxValues,
    datasets: [{
      backgroundColor: nbarColors,
      data: nyValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Distribution Of Keywords in these articles "
    }
  }
  });
 

})
