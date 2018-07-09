/*
 创建路面
*/
function createRoad() {
    var road = new THREE.Mesh( new THREE.PlaneGeometry( 100, 74, 1, 1 ), new THREE.MeshLambertMaterial( { color: 0x333333, transparent: false, wireframe: false, side: THREE.FrontSide } ) );
    var roadLineM = new THREE.Mesh( new THREE.PlaneGeometry( 6, 44, 1, 1 ), new THREE.MeshLambertMaterial( { color: 0xeeeeee, transparent: false, wireframe: false, side: THREE.FrontSide } ) );
    var roadLineL = new THREE.Mesh( new THREE.PlaneGeometry( 6, 74, 1, 1 ), new THREE.MeshLambertMaterial( { color: 0xeeeeee, transparent: false, wireframe: false, side: THREE.FrontSide } ) );
    var roadLineR = new THREE.Mesh( new THREE.PlaneGeometry( 6, 74, 1, 1 ), new THREE.MeshLambertMaterial( { color: 0xeeeeee, transparent: false, wireframe: false, side: THREE.FrontSide } ) );

    roadLineM.position.set( 0, 0.5, 0);
    roadLineL.position.set( 97, 0.5, 0);
    roadLineR.position.set( -97, 0.5, 0);

    var roadGroup = new THREE.Group();
    roadGroup.add(road);
    roadGroup.add(roadLineM);
    roadGroup.add(roadLineL);
    roadGroup.add(roadLineR);

    return roadGroup;
}

/*
 * 创建仓库
 */
function createBase( objArray ) {
    var baseStat={
        x:350,  //  长
        y:350,  //  宽
        z:150   //  高
    }
    var floorTexture = new THREE.TextureLoader().load( 'img/block.jpg' );
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set( 20, 20 );
    var floorMaterial = new THREE.MeshLambertMaterial( { map: floorTexture, side: THREE.DoubleSide } );
    var defaultMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, transparent: true, opacity: 1, side: THREE.DoubleSide } );
    var baseMaterialArray = [defaultMaterial, defaultMaterial, defaultMaterial, floorMaterial, defaultMaterial, defaultMaterial];  // 左右上下前后

    var baseBase = new THREE.BoxBufferGeometry( baseStat.x, baseStat.z, baseStat.y, 3, 1, 3);
    var base = new THREE.Mesh( baseBase, baseMaterialArray );
    base.position.set( 0, baseStat.z/2, 0);

    // 仓库顶
    var baseTopMaterialArray = [defaultMaterial, defaultMaterial, defaultMaterial, defaultMaterial, defaultMaterial, defaultMaterial];
    var baseTop = new THREE.Mesh( new THREE.BoxBufferGeometry( 370, 10, 370, 3, 1, 3), baseTopMaterialArray );
    baseTop.position.set( 0, 155, 0);

    var baseTopCan = new THREE.Mesh( new THREE.BoxBufferGeometry( 50, 16, 40, 1, 1, 1), baseTopMaterialArray );
    baseTopCan.position.set( -100, 163, 100);
    var baseTopCan1 = new THREE.Mesh( new THREE.BoxBufferGeometry( 50, 16, 40, 1, 1, 1), baseTopMaterialArray );
    baseTopCan1.position.set( 100, 163, 100);
    var baseTopCan2 = new THREE.Mesh( new THREE.BoxBufferGeometry( 50, 16, 40, 1, 1, 1), baseTopMaterialArray );
    baseTopCan2.position.set( 100, 163, -100);
    var baseTopCan3 = new THREE.Mesh( new THREE.BoxBufferGeometry( 180, 10, 160, 1, 1, 1), baseTopMaterialArray );
    baseTopCan3.position.set( 0, 160, 0);
    var baseTopCan4 = new THREE.Mesh( new THREE.CylinderBufferGeometry( 10, 10, 20, 32), defaultMaterial );
    baseTopCan4.position.set( -100, 165, -100);
    var baseTopCan5 = new THREE.Mesh( new THREE.CylinderBufferGeometry( 10, 10, 20, 32), defaultMaterial );
    baseTopCan5.position.set( -80, 165, -100);

    var baseGroup = new THREE.Group();
    baseGroup.add( base );
    baseGroup.add( baseTop );
    baseGroup.add( baseTopCan );
    baseGroup.add( baseTopCan1 );
    baseGroup.add( baseTopCan2 );
    baseGroup.add( baseTopCan3 );
    baseGroup.add( baseTopCan4 );
    baseGroup.add( baseTopCan5 );

    base.name = "base";
    baseGroup.name = "baseGroup";

    objArray.push( base );

    return baseGroup;
}

/*
* 窗户构建
*/
function createWindow() {
    var windowMaterial = new THREE.MeshLambertMaterial( { color: 0x94e0ff, transparent: true, opacity: 1, side: THREE.DoubleSide } );
    var windowEdgeMaterialArray = [windowMaterial, windowMaterial, windowMaterial, windowMaterial, windowMaterial, windowMaterial];

    var windowEdgeTop = new THREE.BoxBufferGeometry( 4, 4, 60, 1, 1, 1);
    var windowEdgeLeft = new THREE.BoxBufferGeometry( 4, 30, 4, 1, 1, 1);
    var windowEdgeMiddle = new THREE.BoxBufferGeometry( 2, 30, 2, 1, 1, 1);

    var windowTop = new THREE.Mesh( windowEdgeTop, windowEdgeMaterialArray );
    var windowLeft = new THREE.Mesh( windowEdgeLeft, windowEdgeMaterialArray );
    var windowBottom = new THREE.Mesh( windowEdgeTop, windowEdgeMaterialArray );
    var windowRight = new THREE.Mesh( windowEdgeLeft, windowEdgeMaterialArray );
    var windowMiddle = new THREE.Mesh( windowEdgeMiddle, windowEdgeMaterialArray);
    windowTop.position.set( 0, 15, 0);
    windowLeft.position.set( 0, 0, -30+0.5);
    windowBottom.position.set( 0, -15, 0);
    windowRight.position.set( 0, 0, 30-0.5);

    var glassMaterial = new THREE.MeshLambertMaterial( { color: 0xcfefff, transparent: true, opacity: 0.9, side: THREE.DoubleSide} );
    var glassPlane = new THREE.PlaneBufferGeometry( 60, 30, 6, 3);
    var glass = new THREE.Mesh( glassPlane, glassMaterial );
    glass.rotation.y = Math.PI/2;
    /*
    glass.position.x = 0.1;
    var glass1 = new THREE.Mesh( glassPlane, glassMaterial );
    glass1.rotation.y = Math.PI/2;
    glass1.position.x = -0.1;
    */
    var windowGroup = new THREE.Group();
    windowGroup.add(windowTop);
    windowGroup.add(windowLeft);
    windowGroup.add(windowBottom);
    windowGroup.add(windowRight);
    windowGroup.add(windowMiddle);
    windowGroup.add(glass);
    //windowGroup.add(glass1)

    return windowGroup;
}

// 创建门
function createDoor(){
    var doorMaterial = new THREE.MeshLambertMaterial( { color: 0x94e0ff, transparent: true, opacity: 1, side: THREE.DoubleSide } );
    var doorEdgeMaterialArray = [doorMaterial, doorMaterial, doorMaterial, doorMaterial, doorMaterial, doorMaterial];
    var doorTop = new THREE.Mesh( new THREE.BoxBufferGeometry( 100, 5, 10, 3, 1, 3), doorEdgeMaterialArray );
    var doorLeft = new THREE.Mesh( new THREE.BoxBufferGeometry( 5, 60, 5, 3, 1, 3), doorEdgeMaterialArray );
    var doorRight = new THREE.Mesh( new THREE.BoxBufferGeometry( 5, 60, 5, 3, 1, 3), doorEdgeMaterialArray );

    var doorFace = new THREE.Mesh( new THREE.PlaneBufferGeometry( 100, 60, 1, 1), new THREE.MeshLambertMaterial( { color: 0xcccccc, transparent: true, opacity: 1, side: THREE.DoubleSide}));
    doorTop.position.set( 0, 30, 0);
    doorLeft.position.set( -45, 0, 0);
    doorRight.position.set( 45, 0, 0);

    var doorGroup = new THREE.Group();
    doorGroup.add(doorTop);
    doorGroup.add(doorLeft);
    doorGroup.add(doorRight);
    doorGroup.add(doorFace);

    return doorGroup;
}

// 门禁
function createDoorButton() {
    var buttonBottom = new THREE.Mesh( new THREE.PlaneGeometry( 4, 4, 1, 1 ), new THREE.MeshBasicMaterial( { color: 0x222222, opacity: 1, transparent: false, side: THREE.DoubleSide } ) );
    buttonBottom.rotation.x = Math.PI/2;
    buttonBottom.position.set( 0, 0, 0);
    var button = new THREE.Mesh( new THREE.CylinderBufferGeometry( 1.5, 1.5, 1, 32 ), new THREE.MeshBasicMaterial( {color: 0xff0000} ) );
    button.position.set( 0, 0.5, 0);

    var buttonGroup = new THREE.Group();
    buttonGroup.add( buttonBottom );
    buttonGroup.add( button );

    button.name = "button";
    objects.push( button );

    return buttonGroup;
}

// 摄像头
function createCamera( objArray ){
    var cameraBodyMaterial = new THREE.MeshLambertMaterial( {color: 0x555555, side:THREE.DoubleSide } );
    var cameraMentalMaterial = new THREE.MeshLambertMaterial( {color: 0xeeeeee, side:THREE.DoubleSide } );

    var cameraBody = new THREE.Mesh( new THREE.CylinderBufferGeometry( 3, 3, 10, 10 ), cameraBodyMaterial );
    var cameraStick = new THREE.Mesh( new THREE.CylinderBufferGeometry( 0.8, 0.8, 6, 32 ), cameraMentalMaterial );
    var cameraPointBall = new THREE.Mesh( new THREE.SphereBufferGeometry( 1.2, 32, 32 ), cameraMentalMaterial );
    var cameraPointBall_1 = new THREE.Mesh( new THREE.SphereBufferGeometry( 1.2, 32, 32 ), cameraMentalMaterial );
    var cameraShelf = new THREE.Mesh( new THREE.ConeGeometry( 2, 3, 32 ), cameraMentalMaterial )

    cameraBody.position.set( 0, 4, -4);
    cameraBody.rotation.x = Math.PI/3;
    cameraBody.rotation.z = Math.PI/6;
    cameraStick.position.set( 0, 0, -1);
    cameraStick.rotation.x = -Math.PI/6;
    cameraPointBall.position.set( 0, -3, 0.6);
    cameraPointBall_1.position.set( 0, 1.4, -1.8);
    cameraShelf.rotation.x = -Math.PI/2;
    cameraShelf.position.set( 0, -3, 3);

    var cameraGroup = new THREE.Group();
    cameraGroup.add( cameraBody );
    cameraGroup.add( cameraStick );
    cameraGroup.add( cameraPointBall );
    cameraGroup.add( cameraPointBall_1 );
    cameraGroup.add( cameraShelf );

    cameraBody.name = "camera";
    cameraGroup.name = "cameraGroup";

    objects.push( cameraBody );

    return cameraGroup;
}

// 警报器
function createAlarm() {
    // var points = [];
    // for ( var i = 0; i < 4; i ++ ) {
    //     points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 4 + 2 , ( i - 2 ) * 2 ) );  // 点
    // }
    // var geometry = new THREE.LatheBufferGeometry( points );
    var geometry = new THREE.SphereBufferGeometry( 3, 23 , 23, 0, 6.3, 4, 3.5);
    var material = new THREE.MeshBasicMaterial( { color: 0xdf2010 } );
    var lathe = new THREE.Mesh( geometry, material );
    var alarmGroup = new THREE.Group();
    alarmGroup.add( lathe );

    lathe.name = "alarm";
    objects.push( lathe );

    return alarmGroup;
}
