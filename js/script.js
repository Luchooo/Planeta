  window.onload=function(){

	inicio();  	
  }    

  function inicio () {
  
    //Creacion de variables
      var camara, escena, renderer;
      var group;
      var container=document.getElementById('container');

      
      init();
      animate();

      function init() {

       //Posicionar camara con respecto al ancho y largo de la ventana
        camara = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 2000 );
        camara.position.z = 500;//Posicionamiento de la camara aproximadamente en la mitad
        escena = new THREE.Scene();//Crear objeto escena.
        group = new THREE.Object3D();//Creacion de objeto enforma 3D
        escena.add(group);//Adiccionar el objeto 3D a la escena

        // Planeta_Tierra
        var loader = new THREE.TextureLoader();//Cargando textura para el planeta...
        loader.load( 'texturas/mapamundi.jpg', function ( texture ) {

          var geometry = new THREE.SphereGeometry(200,20, 20 );//Creacion de esfera
          var material = new THREE.MeshBasicMaterial({map:texture,overdraw:0.5});//Material base
          var mesh = new THREE.Mesh(geometry,material);
          group.add(mesh);

        } );


        //Canvas
        renderer = new THREE.CanvasRenderer();//Crear objeto de renderizado del canvas
        renderer.setClearColor(0x000000);//Color de fondo del canvas
        renderer.setSize(window.innerWidth,window.innerHeight);//Cordenadas del cambas 
        container.appendChild(renderer.domElement);

   
      }


       //Funcion ANimar
      function animate() {

        requestAnimationFrame(animate);
        render();
      
      }

      //Funcion Renderizar
      function render() {
        
   
        group.rotation.y -= 0.005;//Rotacion del mundo
        renderer.render(escena,camara);
      }
};