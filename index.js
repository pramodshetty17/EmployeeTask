const text=document.getElementById("mytext");

const btn=document.getElementById("btn");
const taskList=document.getElementById("task");
const status=document.getElementById("status");

text.addEventListener("input", function()
{
    if(text.value.trim()==="")
    {
        btn.disabled=true;
    }
    else
    {
        btn.disabled=false;
    }
});

btn.addEventListener("click", function()
{
   const task=text.value.trim();
   

   if(task==="")
    return;

   const li=document.createElement("li");
   li.innerText=task;

   const taskStatus=status.value;
   const statuSpan=document.createElement("span");

   if(taskStatus==="not-started")
   {
     statuSpan.innerText="Not Yet Started";
     statuSpan.classList.add("not-started");
   }
   else if(taskStatus==="in-progress")
   {
    statuSpan.innerText="It is Process";
    statuSpan.classList.add("in-progress");
   }
   else
   {
    statuSpan.innerText="Completed";
    statuSpan.classList.add("complete");
   }

  

   const delbtn=document.createElement("button");
   delbtn.innerText="🗑️";

   delbtn.addEventListener("click", function()
{
    li.remove();
});
li.appendChild(statuSpan);
li.appendChild(delbtn);


taskList.appendChild(li);

});