// Tạo hàm
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
// Test dữ liệu 
createImage('Image/img-1.png').then(img=>{
    currentImg=img;
    console.log("Image 1 loaded");
    return wait(2);
}).then(img=>{
    currentImg.style.display='none';
    return createImage('Image/img-2.png')
}).then(img=>{
    currentImg=img;
    console.log("Image 2 loaded");
    return wait(2);
}).then(img=>{
    currentImg.style.display='none';
    return createImage('Image/img-3.png')
}).then(img=>{
    currentImg=img;
    console.log("Image 3 loaded");
    return wait(2);
}).catch(err=>{
    console.log(err);
}
)
// Hàm wait 
function wait(seconds){
    return new Promise(resolve=>setTimeout(resolve,seconds*1000));
}
export {createImage}