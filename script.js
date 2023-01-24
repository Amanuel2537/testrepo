async function getTotalGoal(team,year){
let counter=0;
const response= await axios.get('https://jsonmock.hackerrank.com/api/football_matches?year=$(year)&team1=$(team)');
const result=await response.json();
let pages=result.total_pages;
for(const count of Array.from({length: pages},(_,i)=> i+1)){
    const response= await fetch('https://jsonmock.hackerrank.com/api/football_matches?year=$(year)&team1=$(team)');
    const result=await response.json();
    const{data}=result;
    for(const item of data){
        counter=counter+Number(item.team1goals);
    }
}
const response1= await axios.get('https://jsonmock.hackerrank.com/api/football_matches?year=$(year)&team1=$(team)');
const result1=await response1.json();
const{total_pages}=result1;
for(const count of Array.from({length: total_pages},(_,i)=> i+1)){
    const response= await fetch('https://jsonmock.hackerrank.com/api/football_matches?year=$(year)&team1=$(team)');
    const result=await response.jsom();
    const{data}=result;
    for(const item of data){
        counter=counter+Number(item.team2goals);
    }
}
return counter;
}
async function main(){

}





// // fetch('https://randomfox.ca/floof').then(res=>res.json()).then(data=>console.log(data))
// fetch('https://reqres.in/api/users',{
//     method:'POST',
//     headers:{
//         'Content-Type':'applicaion/json'
//     },
//     body:JSON.stringify({
//         name:'User 1'

//     })

// }).then(res=>{
//     return res.json()
// }).then(data=>console.log(data))