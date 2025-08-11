import fetch from 'node-fetch';
import promptSync from 'prompt-sync';
const prompt = promptSync();
function main(){
let datainarray = [];
const data = async () => {
    try {
        const collected_data = await fetch("https://jsonplaceholder.typicode.com/posts");
        datainarray = await collected_data.json();
        const tenarray = [];
        for (let i = 0; i < 10; i++) {
            const output = datainarray.slice(i * 10, i * 10 + 10);
            tenarray.push(output);
        }
         const userint = tenarray[pagenumber - 1];
        const filtereddata = userint.filter(post => post.userId === userId);
         console.log(`\nFiltered posts from page ${pagenumber}:`);
        filtereddata.forEach(({ id, userId, title, body }) => {
            console.log(`ID: ${id}\nuserId: ${userId}\ntitle: ${title}\nbody: ${body}\n`);
        });
       console.log(`limit: ${pagenumber * 10}`);
    } catch (err) {
        console.error("error", err);
    }
};
const userId = parseInt(prompt("UserID: "));
const pagenumber = parseInt(prompt("Page number: "));
data();}
main();
