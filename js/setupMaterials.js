function setupMaterials()
{
	panoTopTextureIndex = 1;
	panoBottomTextureIndex = 0;

	panoTopMaterial = new THREE.MeshBasicMaterial(
		{
			map: panoramaTextureArray[panoTopTextureIndex]
		}
	);
	panoTopMaterial.shading = THREE.SmoothShading;
	//definiert welche Seite gerendert werden soll. Front,Back,Double
	panoTopMaterial.side = THREE.DoubleSide;

	// setup both Panorama Materials
	panoBottomMaterial = new THREE.MeshBasicMaterial(
		{
			map: panoramaTextureArray[panoBottomTextureIndex]
		}
	);
	panoBottomMaterial.shading = THREE.SmoothShading;
	//definiert welche Seite gerendert werden soll. Front,Back,Double
	panoBottomMaterial.side = THREE.DoubleSide;

	let texturePlank = new THREE.TextureLoader().load( 'img/Textures/woodenPlanksAll.png' );
	texturePlank.wrapS = texturePlank.wrapT = THREE.RepeatWrapping;
	plankMaterial = new THREE.MeshLambertMaterial( { map: texturePlank } );
	plankMaterial.shading = THREE.SmoothShading;
	plankMaterial.side = THREE.DoubleSide;

	let textureWall = new THREE.TextureLoader().load( 'img/Textures/wand.png' );
	textureWall.wrapS = textureWall.wrapT = THREE.RepeatWrapping;
	wallMaterial = new THREE.MeshBasicMaterial( { map: textureWall } );
	wallMaterial.shading = THREE.SmoothShading;
	wallMaterial.side = THREE.DoubleSide;

	let textureElevator = new THREE.TextureLoader().load( 'img/Textures/aufzug.png' );
	textureElevator.wrapS = textureElevator.wrapT = THREE.RepeatWrapping;
	elevatorMaterial = new THREE.MeshLambertMaterial( { map: textureElevator } );
	elevatorMaterial.shading = THREE.SmoothShading;
	elevatorMaterial.side = THREE.DoubleSide;

	let textureButtonUp = new THREE.TextureLoader().load( 'img/Textures/buttonRauf.png' );
	textureButtonUp.wrapS = textureButtonUp.wrapT = THREE.RepeatWrapping;
	textureButtonUp.repeat.x = -1;
	buttonUpMaterial = new THREE.MeshLambertMaterial( { map: textureButtonUp } );
	buttonUpMaterial.shading = THREE.SmoothShading;
	buttonUpMaterial.side = THREE.DoubleSide;

	let textureButtonDown = new THREE.TextureLoader().load( 'img/Textures/buttonRunter.png' );
	textureButtonDown.wrapS = textureButtonDown.wrapT = THREE.RepeatWrapping;
	textureButtonDown.repeat.x = -1;
	buttonDownMaterial = new THREE.MeshLambertMaterial( { map: textureButtonDown } );
	buttonDownMaterial.shading = THREE.SmoothShading;
	buttonDownMaterial.side = THREE.DoubleSide;

	let textureButtonRandomFloor = new THREE.TextureLoader().load( 'img/Textures/buttonRandomFloor.png' );
	textureButtonRandomFloor.wrapS = textureButtonRandomFloor.wrapT = THREE.RepeatWrapping;
	textureButtonRandomFloor.repeat.x = -1;
	buttonRandomFloorMaterial = new THREE.MeshLambertMaterial( { map: textureButtonRandomFloor } );
	buttonRandomFloorMaterial.shading = THREE.SmoothShading;
	buttonRandomFloorMaterial.side = THREE.DoubleSide;

	let textureButtonMusik1 = new THREE.TextureLoader().load( 'img/Textures/buttonMusik1.png' );
	textureButtonMusik1.wrapS = textureButtonMusik1.wrapT = THREE.RepeatWrapping;
	textureButtonMusik1.repeat.x = -1;
	buttonMusik1Material = new THREE.MeshLambertMaterial( { map: textureButtonMusik1 } );
	buttonMusik1Material.shading = THREE.SmoothShading;
	buttonMusik1Material.side = THREE.DoubleSide;

	let textureButtonMusik2 = new THREE.TextureLoader().load( 'img/Textures/buttonMusik2.png' );
	textureButtonMusik2.wrapS = textureButtonMusik2.wrapT = THREE.RepeatWrapping;
	textureButtonMusik2.repeat.x = -1;
	buttonMusik2Material = new THREE.MeshLambertMaterial( { map: textureButtonMusik2 } );
	buttonMusik2Material.shading = THREE.SmoothShading;
	buttonMusik2Material.side = THREE.DoubleSide;

	let textureNumpad = new THREE.TextureLoader().load( 'img/Textures/numPad.png' );
	textureNumpad.wrapS = textureNumpad.wrapT = THREE.RepeatWrapping;
	textureNumpad.repeat.x = -1;
	numPadMaterial = new THREE.MeshLambertMaterial( { map: textureNumpad } );
	numPadMaterial.shading = THREE.SmoothShading;
	numPadMaterial.side = THREE.DoubleSide;
}