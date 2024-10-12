var createScene = function () {
    // Это создает базовый объект сцены Babylon (без меша)
    var scene = new BABYLON.Scene(engine);

    // Это создает и позиционирует свободную камеру (без меша)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

    // Это нацеливает камеру на начало сцены
    camera.setTarget(BABYLON.Vector3.Zero());

    // Это позволяет прикрепить камеру к холсту
    camera.attachControl(canvas, true);

    // Это создает свет, направленный 0,1,0 - в небо (без меша)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Интенсивность по умолчанию равна 1. Давайте немного приглушим свет
    light.intensity = 0.7;

    // Создайте массив для хранения астероидов
    var asteroids = [];

    // Создайте массив для хранения фрагментов
    var chunks = {};


var images = [
  "https://i.postimg.cc/Ssbg7BjX/2023-2-3-17-53-10-20.jpg",
  "https://i.postimg.cc/x80GWcF0/unnamed.jpg",
  "https://i.postimg.cc/q77MN552/1-Yr4w-E4q4x2-BQ8-Dtbhqcu-Qw.gif",
  "https://i.postimg.cc/YCRfkSd3/7ag1x5at-2.jpg",
  "https://i.postimg.cc/HxkVLc0k/pensive-face.jpg",
  "https://i.postimg.cc/gktXLCYx/2024-08-02-23-04-25-751.gif",
  "https://i.postimg.cc/W3fLxS4t/2024-08-03-13-25-32-204.gif",
  "https://i.postimg.cc/HjGyS5cR/2024-08-03-13-57-48-937.gif",
  "https://i.postimg.cc/KYp9QGFL/2024-08-03-14-33-24-648.gif",
  "https://i.postimg.cc/pdXfH1D1/JustLuckyTrick.gif",
  "https://i.postimg.cc/pdFyjNv0/2023-01-21-03-11-28-978.gif",
  "https://i.postimg.cc/ZRPRfrCp/2023-01-21-03-12-59-800.gif",
  "https://i.postimg.cc/mkbrKtHq/2023-01-21-03-17-20-826.gif",
  "https://i.postimg.cc/SQ3zQYL6/64b.gif",
  "https://i.postimg.cc/d3LZMCG3/2024-02-07-20-07-07-588-1.gif",
  "https://i.postimg.cc/hGJfQgKM/2024-08-06-19-27-27-7-1.gif",
  "https://i.postimg.cc/wT59Zhbz/2024-02-12-18-33-20-510.gif",
  "https://i.postimg.cc/k5dcrz2q/2023-12-18-1-19-56-790.jpg",
  "https://i.postimg.cc/d0kFN3V0/STZ5.gif",
  "https://i.postimg.cc/7LQXfDSg/2023-12-23-03-12-09-778.gif",
  "https://i.postimg.cc/BQqkr5Bw/16430964662451s.jpg",
  "https://i.postimg.cc/mrf3hT2p/2024-8-29-21-38-20-308.jpg",
  "https://i.postimg.cc/TYXLGFfr/Tunnel.webp",
  "https://i.postimg.cc/J4bDtgMd/2023-11-6-16-44-23-511.jpg",
  "https://i.postimg.cc/HLL70h1R/2023-9-3-18-12-42-812.jpg",
  "https://i.postimg.cc/RFpPW6Q9/mqdefault_6s.webp",
  "https://i.postimg.cc/rFVw26tm/2023-9-23-0-23-56-926.jpg", 
  "https://i.postimg.cc/wxmgqWZ2/2d8411cdb9438b8dd5c9e954fa4f8e9a.jpg",
  "https://i.postimg.cc/NFmM74xF/2024-6-2-13-32-8-360.jpg",
  "https://i.postimg.cc/4y0bW284/2024-6-25-4-49-5-98.jpg",
  "https://i.postimg.cc/W4zkKBYw/6qmI.gif",
  "https://i.postimg.cc/cCd69J64/c3c4ff08709c03093ec8db7144859c438b0a18e3-2-690x174.jpg",
  "https://i.postimg.cc/wjXLHjfr/6y4el-S5xt-EQ.jpg",
  "https://i.postimg.cc/FRxKRTgc/scale-1200.png",
  "https://i.postimg.cc/ZnC63vz5/Figure-1.jpg",
  "https://i.postimg.cc/Pq7xgZY0/wallpaper.jpg",
  "https://i.postimg.cc/y83ChCs2/image.png",
  "https://i.postimg.cc/wvStLGvz/image.jpg",
  "https://i.postimg.cc/fTN3vyCh/wallpaper-new.jpg"
  // добавьте больше картинок в массив
];

var imagesU = [
  "https://habr.com/ru/articles/481218/",
  "https://codepen.io/andrewsims/pen/qXZbPY",
  "https://www.youtube.com/watch?v=ZQIUAoNEhIo",
  "https://habr.com/ru/articles/848794/",
  "https://sfiz.ru/forums/posts/9588?d=120",
  "https://soundcloud.com/you/history",
  "https://www.youtube.com/shorts/j9y75WHqIvg",
  "https://www.youtube.com/watch?v=qmE0i4n9Few",
  "https://www.youtube.com/watch?v=zWmhRSAcWkI",
  "https://www.youtube.com/watch?v=oHJGKHUf8VE",
  "https://www.youtube.com/watch?v=dSPCLOGmFR0",
  "https://www.youtube.com/watch?v=v0wgz_Obx3Y",
  "https://github.com/MakarovDs777/Quantum-foam-python",
   "https://github.com/MakarovDs777/Quantum-foam-python",
  "https://github.com/MakarovDs777/Quantum-foam-python",
  "https://github.com/MakarovDs777/Quantum-foam-python",
  "https://github.com/MakarovDs777/Quantum-foam-python",
  "https://github.com/MakarovDs777/Quantum-foam-python",
  "https://github.com/MakarovDs777/Quantum-foam-python",
  "https://github.com/MakarovDs777/Quantum-foam-python",
  "https://github.com/MakarovDs777/Quantum-foam-python",
  "https://github.com/MakarovDs777/Quantum-foam-python",
  "https://github.com/MakarovDs777/Quantum-foam-python",
  "https://github.com/MakarovDs777/Quantum-foam-python",
   "https://github.com/MakarovDs777/Quantum-foam-python",
   "https://github.com/MakarovDs777/Quantum-foam-python",
   "https://github.com/MakarovDs777/Quantum-foam-python", 
  "https://github.com/MakarovDs777/Quantum-foam-python",
  "https://github.com/MakarovDs777/Quantum-foam-python",
  "https://github.com/MakarovDs777/Quantum-foam-python",
  "https://github.com/MakarovDs777/Quantum-foam-python",
  "https://github.com/MakarovDs777/Quantum-foam-python",
  "https://github.com/MakarovDs777/Quantum-foam-python",
   "https://github.com/MakarovDs777/Quantum-foam-python",
  "https://github.com/MakarovDs777/Quantum-foam-python",
  "https://github.com/MakarovDs777/Quantum-foam-python",
   "https://www.online-python.com/",
   "https://www.online-python.com/",
  "https://github.com/MakarovDs777/WebSDR-EVP"
  // добавьте больше ссылок в массив
];

function createAsteroid(x, y, z, radius) {
  var vx = Math.random() * 2 - 1;
  var vy = Math.random() * 2 - 1;
  var vz = Math.random() * 2 - 1;
  // выбираем случайную картинку из словаря
  var randomIndex = Math.floor(Math.random() * Object.keys(images).length);
  var imageUrl = Object.keys(images)[randomIndex];

  var maU = images[imageUrl];

  // созаем текстуру с изображением
  var texture = new BABYLON.Texture(maU, scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);

  // создаем материал с текстурой
  var material = new BABYLON.StandardMaterial("material", scene);
  material.diffuseTexture = texture;

  // создаем астероид
  var asteroid = BABYLON.MeshBuilder.CreatePlane("plane", {
    width: radius * 2,
    height: radius * 2,
    subdivisions: 2
  }, scene);

  asteroid.material = material;

  asteroid.position = new BABYLON.Vector3(x, y, z);

  // добавляем обработчики событий
  asteroid.actionManager = new BABYLON.ActionManager(scene);
  asteroid.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function (event) {
      // создаем рамку вокруг астероида при наведении
      var outline = BABYLON.Mesh.CreateBox("outline", 0.1, scene);
      outline.position = asteroid.position.clone();
      outline.scaling = new BABYLON.Vector3(asteroid.scaling.x * 1.1, 0.1, asteroid.scaling.z * 1.1);
      outline.material = new BABYLON.StandardMaterial("outlineMaterial", scene);
      outline.material.diffuseColor = new BABYLON.Color3(0, 1, 0); // зеленый цвет
      outline.material.specularColor = new BABYLON.Color3(0, 1, 0);
      outline.material.emissiveColor = new BABYLON.Color3(0, 1, 0);
      outline.parent = asteroid;
    })
  );
  asteroid.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function (event) {
      // удаляем рамку при уходе курсора
      if (asteroid.getChildMeshes().length > 0) {
        asteroid.getChildMeshes()[0].dispose();
      }
    })
  );
  asteroid.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (event) {
      // открываем ссылку при клике на астероид
      window.open(imagesU[imageUrl], '_blank');
    })
  );

  asteroids.push({asteroid: asteroid, vx: vx, vy: vy, vz: vz, radius: radius});
}

  // Функция для генерации фрагмента
  function generateChunk(x, z) {
    if (chunks[x + "," + z]) return;

    chunks[x + "," + z] = true;

    for (var i = 0; i < 100; i++) {
      var lx = x * 100 + Math.random() * 100;
      var ly = Math.random() * 100; // генерируем координату y случайным образом
      var lz = z * 100 + Math.random() * 100;

      var radius = Math.random() * 2 + 0.5; // генерируем случайный радиус
      createAsteroid(lx, ly, lz, radius);
    }
  }

  // Функция для выгрузки фрагмента
  function unloadChunk(x, z) {
    if (!chunks[x + "," + z]) return;

    chunks[x + "," + z] = false;

    for (var i = 0; i < asteroids.length; i++) {
      var asteroid = asteroids[i];
      if (Math.floor(asteroid.asteroid.position.x / 100) === x && Math.floor(asteroid.asteroid.position.z / 100) === z) {
        scene.removeMesh(asteroid.asteroid);
        asteroids.splice(i, 1);
        i--;
      }
    }
  }

  // Цикл анимации
  scene.registerBeforeRender(function () {
    var chunkX = Math.floor(camera.position.x / 100);
    var chunkZ = Math.floor(camera.position.z / 100);

    for (var x = chunkX - 1; x <= chunkX + 1; x++) {
      for (var z = chunkZ - 1; z <= chunkZ + 1; z++) {
        generateChunk(x, z);
      }
    }

    for (var x = chunkX - 2; x <= chunkX + 2; x++) {
      for (var z = chunkZ - 2; z <= chunkZ + 2; z++) {
        if (x < chunkX - 1 || x > chunkX + 1 || z < chunkZ - 1 || z > chunkZ + 1) {
          unloadChunk(x, z);
        }
      }
    }

    for (var i = 0; i < asteroids.length; i++) {
      var asteroid = asteroids[i];

      // Определяем целевую позицию (в этом случае - не изменяется)
      var targetPosition = asteroid.asteroid.position;

      // Обновляем позицию астероида
      asteroid.asteroid.position = targetPosition;

      // Обновляем размер астероида
      asteroid.asteroid.scaling = new BABYLON.Vector3(asteroid.radius, asteroid.radius, asteroid.radius);
    }
  });

  return scene;
};
