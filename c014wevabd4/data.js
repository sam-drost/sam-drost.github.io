var APP_DATA = {
  "scenes": [
    {
      "id": "0-vestibule-1",
      "name": "Vestibule 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.322594087798569,
          "pitch": 0.40390637956536324,
          "rotation": 3.141592653589793,
          "target": "1-vestibule-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-vestibule-2",
      "name": "Vestibule 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7667037081655792,
          "pitch": 0.4047453304624753,
          "rotation": 3.141592653589793,
          "target": "0-vestibule-1"
        },
        {
          "yaw": 1.5295823542376272,
          "pitch": 0.3816771125187852,
          "rotation": 3.141592653589793,
          "target": "2-kitchen"
        },
        {
          "yaw": 2.8631982782101737,
          "pitch": 0.21775631960569797,
          "rotation": 0,
          "target": "7-office"
        },
        {
          "yaw": -0.14328754518226994,
          "pitch": 0.6304363559366628,
          "rotation": 3.141592653589793,
          "target": "10-sanctuary-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "3-fellowship-hall-1",
      "name": "Fellowship Hall (1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4998256071611795,
          "pitch": 0.33695951639488975,
          "rotation": 3.141592653589793,
          "target": "2-kitchen"
        },
        {
          "yaw": 0.9288685828073895,
          "pitch": 0.21176160907256936,
          "rotation": 4.71238898038469,
          "target": "9-sanctuary-2"
        },
        {
          "yaw": 1.2531436195761643,
          "pitch": 0.21342830715389027,
          "rotation": 7.853981633974483,
          "target": "8-sanctuary-1"
        },
        {
          "yaw": 2.33575207138165,
          "pitch": 0.47261737068477316,
          "rotation": 4.71238898038469,
          "target": "5-stairs"
        },
        {
          "yaw": -2.1393260711572797,
          "pitch": 0.04236175207864612,
          "rotation": 7.853981633974483,
          "target": "6-nursery"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-fellowship-hall-2",
      "name": "Fellowship Hall (2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4982621741372508,
          "pitch": 0.362628186297588,
          "rotation": 3.141592653589793,
          "target": "3-fellowship-hall-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-stairs",
      "name": "Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.038847673027994745,
          "pitch": 0.8489280065144627,
          "rotation": 3.141592653589793,
          "target": "3-fellowship-hall-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-nursery",
      "name": "Nursery",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5867678274349046,
          "pitch": 0.23518015711254137,
          "rotation": 0,
          "target": "3-fellowship-hall-1"
        },
        {
          "yaw": -1.8303739266189787,
          "pitch": 0.30046611503768794,
          "rotation": 0,
          "target": "7-office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-office",
      "name": "Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5026575329887031,
          "pitch": 0.5315309765242837,
          "rotation": 3.141592653589793,
          "target": "1-vestibule-2"
        },
        {
          "yaw": 2.625387223002887,
          "pitch": 0.363596787138901,
          "rotation": 0,
          "target": "6-nursery"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-sanctuary-1",
      "name": "Sanctuary (1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.487933703113672,
        "pitch": 0.10396459195130525,
        "fov": 1.3396805147900568
      },
      "linkHotspots": [
        {
          "yaw": 3.1098032490234555,
          "pitch": 0.26972035114346227,
          "rotation": 9.42477796076938,
          "target": "9-sanctuary-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-sanctuary-2",
      "name": "Sanctuary (2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.0473155045570355,
        "pitch": 0.14130415067949365,
        "fov": 1.3396805147900568
      },
      "linkHotspots": [
        {
          "yaw": -2.500530597218667,
          "pitch": 0.26375838871861745,
          "rotation": 3.141592653589793,
          "target": "10-sanctuary-3"
        },
        {
          "yaw": 0.6313182487550559,
          "pitch": 0.26521181960245777,
          "rotation": 3.141592653589793,
          "target": "8-sanctuary-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-sanctuary-3",
      "name": "Sanctuary (3)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8962670899692187,
          "pitch": 0.687080594792242,
          "rotation": 3.141592653589793,
          "target": "1-vestibule-2"
        },
        {
          "yaw": 0.3903138319515804,
          "pitch": 0.3708921347256684,
          "rotation": 3.141592653589793,
          "target": "9-sanctuary-2"
        },
        {
          "yaw": -1.1576450916743504,
          "pitch": 0.39388381794009675,
          "rotation": 3.141592653589793,
          "target": "13-sanctuary-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-sanctuary-4",
      "name": "Sanctuary (4)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.9706317274033083,
        "pitch": 0.07899037290917299,
        "fov": 1.3396805147900568
      },
      "linkHotspots": [
        {
          "yaw": -0.1627611500145214,
          "pitch": 0.36050924523426175,
          "rotation": 3.141592653589793,
          "target": "12-sanctuary-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-sanctuary-5",
      "name": "Sanctuary (5)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5557232522266666,
          "pitch": 0.35618110443134476,
          "rotation": 3.141592653589793,
          "target": "11-sanctuary-4"
        },
        {
          "yaw": -2.536337777248445,
          "pitch": 0.41705671124727495,
          "rotation": 3.141592653589793,
          "target": "13-sanctuary-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-sanctuary-6",
      "name": "Sanctuary (6)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9886635841082914,
          "pitch": 0.39761263381715395,
          "rotation": 3.141592653589793,
          "target": "10-sanctuary-3"
        },
        {
          "yaw": 0.38821854467836303,
          "pitch": 0.33200105198887897,
          "rotation": 3.141592653589793,
          "target": "12-sanctuary-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-sanctuary-7",
      "name": "Sanctuary (7)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06507523626783929,
          "pitch": 0.33881686580271086,
          "rotation": 3.141592653589793,
          "target": "13-sanctuary-6"
        },
        {
          "yaw": -1.6852865310157306,
          "pitch": 0.31640867142562357,
          "rotation": 3.141592653589793,
          "target": "15-sanctuary-8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-sanctuary-8",
      "name": "Sanctuary (8)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2198773487270067,
          "pitch": 0.3161882404125187,
          "rotation": 3.141592653589793,
          "target": "14-sanctuary-7"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "C014WEVABD4",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
