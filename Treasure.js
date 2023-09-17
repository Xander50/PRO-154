AFRAME.registerComponent("treasure-chest",{
    init:function(){
        for(var i=1; i<=20; i++){
            var id=`ring${i}`
            var posX=(Math.random()*3000+(-1000))
            var posY=(Math.random()*2+(-1))
            var posZ=(Math.random()*3000+(-1000))
            var position={x:posX,y:posY,z:posZ}
            this.treasure(id,position)
        }
    },
    createRings:function(id,position){
        var islandEl=document.querySelector("#island")
        var ringEl=document.createElement("a-entity")
        chestElEl.setAttribute("id",id)
        chestElgEl.setAttribute("position",position)
        chestEl.setAttribute("material","color","yellow")
        fishEl.setAttribute("gltf-model","./assets/old_wooden_chest/scene.gltf")
        islandEl.appendChild(chestEl)
    }
})