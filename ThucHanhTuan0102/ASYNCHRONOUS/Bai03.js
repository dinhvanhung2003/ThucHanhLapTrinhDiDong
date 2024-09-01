// Bài 3
function createImage(imgPath){
    return new Promise((resolve,reject)=>{
        const img=document.createElement('img');
        img.src=imgPath;
        img.addEventListener('load',()=>{
            document.querySelector('.images').appendChild(img);
            resolve(img);
        })
        img.addEventListener('error',()=>{
            reject(new Errror("Image not found"))
        })  
    })
}
async function loadNPause(){
    try{
        let img=await createImage('Image/img-1.png');
        console.log("Image 1 loaded");
        await wait(2);
        img.style.display='none';

         img=await createImage('Image/img-2.png');
        console.log("Image 2 loaded");
        await wait(2);
        img.style.display='none';

         img=await createImage('Image/img-3.png');
        console.log("Image 3 loaded");
        await wait(2);
        img.style.display='none';
    }catch(err){
        console.log(err);
    }

}
function wait(seconds){
    return new Promise(resolve=>setTimeout(resolve,seconds*1000));
}
loadNPause()