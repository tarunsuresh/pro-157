AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UbjCQQ2SsPdyyOpf1g4fxjcF7w65gjvx0g&usqp=CAU",
      },
      {
        id: "budapest",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZfyUu0pf0dKbvyPqkYFi2t5G7REI7SS7Ow&usqp=CAU",
      },

      {
        id: "eiffel-tower",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbnBuMX_8BKpVnWVYKQ1AIrC_XfHbPfaXvw&usqp=CAU",
      },
      {
        id: "new-york-city",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYS9S-m5-MVrKYBC5N_RNeLhfhl4IoxCeUkA&usqp=CAU",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl=this.createBorder(position,item.id)
      
      // Thumbnail Element
      const thumbnail=this.createThumbNail(item)
      borderEl.appendChild(thumbnail)
     
      // Title Text Element
      const titleEl=this.createTitleEl(position,item)
      borderEl.appendChild(titleEl)
      
      this.placesContainer.appendChild(borderEl);
    }

    

  },

  createBorder:function(position,id){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("id",id)
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{
      primitive:"ring",
      radiusInner:9,
      radiusOuter:10
    })
    entityEl.setAttribute("position",position)
    entityEl.setAttribute("material",{
      color:"green",
      opacity:1,
    })
    return entityEl
  },

  createThumbNail:function(item){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{
      primitive:"circle",
      radius:9,
    })
    entityEl.setAttribute("material",{
      src:item.url
    })
    return entityEl
  },

  createTitleEl:function(position,item){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("text",{
      font:"exo2bold",
      align:"center",
      width:100,
      color:"red",
      value:item.title
    })
    const changedPosition=position
    changedPosition.y=-20
    entityEl.setAttribute("position",changedPosition)
    return entityEl
  }


  
});


