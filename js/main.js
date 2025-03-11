const Services = [
    {
        id : 1,
        title : "Lighting Design",
        descrpation : "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere",
        image : "../pictures/LightingDesignIcon.png"
    },
    {
        id : 2,
        title : "Interior Design",
        descrpation : "From concept to completion, we oversee every detail to bring your vision to life efficiently",
        image : "./pictures/InteriorDesignIcon.png"
    },
    {
        id : 3,
        title : "Outdoor Design",
        descrpation : "Celebrate the changing seasons with our seasonal outdoor decor services",
        image : "./pictures/OutdoorDesignIcon.png"
    },
]
const ThreeSteps =[
    {
        id : 1,
        title : "Start Project",
        descrpation : "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience",
        image : "./pictures/iconTravel.png"
    },
    {
        id : 2,
        title : "Craft",
        descrpation : "Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space",
        image : "./pictures/Light.png"
    },
    {
        id : 3,
        title : "Execute",
        descrpation : "Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space",
        image : "./pictures/Right.png"
    },
]
const FecthData = (e)=>{
    let RunData = ``
    for (let i = 0; i < Services.length; i++) {
        RunData +=`
        <div class="card flex gap-5 w-[310px]">
          <div class="icon flex justify-center items-start h-auto w-[40%]">
            <a href="#"><img class="!h-[40px] !object-fill !w-[72px]" src="${Services[i].image}" alt=""></a>
          </div>
          <div class="box flex flex-col gap-5">
            <h3 class="text-[22px]">${Services[i].title}</h3>
            <p>${Services[i].descrpation}</p>
          </div>
        </div>
        `
    }
    let SectionSteps =``
    for (let i = 0; i < ThreeSteps.length; i++) {
        SectionSteps +=`
        <div class="box w-[100%] h-[25%] flex">
              <div class="icons w-[15%] h-[100%] flex flex-col justify-center items-start gap-3">
                <div class="img bg-[#1F1F1F] w-[42px] h-[42px] rounded-[50%] flex justify-center items-center">
                  <a href="#"><img class="!w-[23px] !h-[23px]" src="${ThreeSteps[i].image}" alt=""></a>
                </div>
                <div class="bg border-[1px] border-[#9B9B9B] w-0 h-[50%]"></div>
              </div>
              <div class="text w-[65%]">
                <h1 class="text-2xl">${ThreeSteps[i].title}</h1>
                <p class="leading-6 text-[15px]">${ThreeSteps[i].descrpation}</p>
              </div>
            </div>
        `
    }
    document.getElementById("cards").innerHTML = RunData
    document.getElementById("CardsSteps").innerHTML = SectionSteps
}
FecthData()

const ScrollHeight =()=>{
    if (window.scrollY >= 200) {
        document.querySelector(".navbar").classList.add("bg-[#545451]")
        document.querySelector(".navbar").classList.add("transition-all")
        let Links = document.querySelectorAll(".aNav")
        for (let i = 0; i < Links.length; i++) {
            Links[i].classList.add("text-[#FFFFFF]")
        }
        document.getElementById("ListDown").classList.add("text-[#545451]")
    }else{
        let Links = document.querySelectorAll(".aNav")
        for (let i = 0; i < Links.length; i++) {
            Links[i].classList.remove("text-[#FFFFFF]")
        }
        document.getElementById("ListDown").classList.remove("text-[#545451]")
        document.querySelector(".navbar").classList.add("transition-all")
        document.querySelector(".navbar").classList.remove("bg-[#545451]")
    }
}
document.getElementById("DropDown").addEventListener("click",()=>{
    document.getElementById("ListDown").classList.toggle("showUl")
})
window.addEventListener("scroll",ScrollHeight)
