let arr = [5,6,45,3,9,5,54,95,2,39659,65,39,22];

let sortedAsc = [...arr].sort((a,b) => a - b );

let sortedDes = [...arr].sort((a,b) => b - a );

let filtered = arr.filter(_val => _val > 50);

let max = () => Math.max(...arr);

let min = () => Math.min(...arr);

window.addEventListener("load", function (e){
    const data = {
            "Array": arr,
            "Sorted Ascending": sortedAsc,
            "Sorted Descending": sortedDes,
            "Filter Results": filtered,
            "Maximum": max(),
            "Minimum": min()
    };

    Object.entries(data).forEach(([label, value]) => {
        let p = document.createElement("p");
        p.innerText = `${label}: ${value}`; 
        document.body.appendChild(p);
    });
});