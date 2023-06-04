"use strict";

const url = "./race.json"
const race = document.querySelector('#race')
const divrace = document.querySelector('.race')
const sousrace = document.querySelector('#sousrace')
const divsousrace = document.querySelector('.sousrace')
const descrace = document.querySelector('.descrace')
const descsousrace = document.querySelector('.descsousrace')
let Y
let X

console.log(url)

race.addEventListener("click", ()=>
{
    fetch(url).then(appRace)
    function appRace(response)
    {
        response.json().then(data=>
            {
                Y = data.Races.length
                X = Math.floor(Math.random()*Y)
                divrace.innerHTML = `${data.Races[X]}`
                descrace.innerHTML = `${data.DescRaces[X]}`
                sousrace.disabled = false
            })
    }
})

sousrace.addEventListener("click", ()=>
{
    console.log(X)
    console.log(Y)
    fetch(url).then(sousRace)
    function sousRace(response)
    {
        response.json().then(data=>
            {
                let Z = divrace.innerHTML
                let A = data.SousRaces[X][Z].length
                let B = Math.floor(Math.random()*A)
                // X = Math.floor(Math.random()*Y)
                divsousrace.innerHTML = data.SousRaces[X][Z][B]
                descsousrace.innerHTML = data.DescSousRaces[X][Z][B]
                console.log(Z)
                console.log(data.SousRaces)
                console.log(data.SousRaces[X][Z])
            })
    }
})