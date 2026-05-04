async function load(){
    let res = await fetch("/api/herbs");
    let data = await res.json();

    let c = document.getElementById("container");
    c.innerHTML = "";

    data.forEach(h=>{
        c.innerHTML += `
        <div class="card">
            <h3>${h.name}</h3>
            <p>${h.cat}</p>
            <button onclick="del(${h.id})">🗑</button>
        </div>
        `;
    });
}

async function add(){
    await fetch("/api/herbs",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            name:name.value,
            cat:cat.value
        })
    });

    load();
}

async function del(id){
    await fetch("/api/herbs/"+id,{method:"DELETE"});
    load();
}

load();