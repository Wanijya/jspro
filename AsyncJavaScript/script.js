function LoadingData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("loading...")
            resolve();
        }, 5000);
    })
}
function ApprovedData() {
    setTimeout(() => {
        console.log("Approved")
    }, 2000);
}
// LoadingData();
// ApprovedData();

async function Ex(){
    await LoadingData();
    await ApprovedData();
}
Ex();