function loadPanoramas()
{
	// Load all Panoramas
	if (debugMode)
	{
		console.log("loading All Panoramas");
	}
	//panoramaTextureArray[0] = new THREE.TextureLoader().load( 'img/singleshot.png' );
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/singleshot.png' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/panorama-atelier-web.png' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/marsPanorama.jpg' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/lasercat.png' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/SonghoyBlues_AlHassidiTerei.png' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/pano4Edit.png' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/luz-am-see.png' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/legopano.png' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/kkl-2.png' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/tintin.png' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/brueckenpano.png' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/pano4.png' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/new-chesus.png' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/pano-dach.png' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/pano-mitte.png' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/BallSackDogPano.png' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/haegar.png' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-1-1.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/beleuchtung.png' ));
	/*
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-1-2.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-1-3.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-1-4.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-2-1.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-2-2.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-2-3.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-2-4.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-3-1.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-3-2.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-3-3.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-3-4.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-4-1.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-4-2.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-4-3.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-4-4.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-5-1.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-5-2.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-5-3.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-5-4.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-6-1.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-6-2.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-6-3.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-6-4.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-7-1.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-7-2.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-7-3.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-7-4.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-8-1.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-8-2.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-8-3.gif' ));
	panoramaTextureArray.push(new THREE.TextureLoader().load( 'img/mario-8-4.gif' ));
	*/

	panoramaTextureArray.forEach( function (element, index)
	{
		// horizontal und vertical Texturemapping, Die Textur wird unendlich offt wiederholt
		panoramaTextureArray[index].wrapS = THREE.RepeatWrapping;
		panoramaTextureArray[index].wrapT = THREE.RepeatWrapping;
		panoramaTextureArray[index].repeat.x = -1;

	});
	if (debugMode)
	{
		console.log("loading All Panoramas finished");
	}
}