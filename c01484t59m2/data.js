var APP_DATA = {
  "scenes": [
    {
      "id": "0-garage",
      "name": "Garage",
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
          "yaw": 1.8589187785573777,
          "pitch": 0.1680308869263918,
          "rotation": 0,
          "target": "5-laundry-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "Living Room",
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
          "yaw": -1.3936879599670409,
          "pitch": 0.45960430360185,
          "rotation": 0,
          "target": "2-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entry",
      "name": "Entry",
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
          "yaw": -1.2737043592225206,
          "pitch": 0.45827922399105603,
          "rotation": 0,
          "target": "1-living-room"
        },
        {
          "yaw": 0.7016159820298782,
          "pitch": 0.5537704887102244,
          "rotation": 0,
          "target": "3-entry-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-entry-2",
      "name": "Entry 2",
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
          "yaw": -0.11459507104184397,
          "pitch": 0.4855180657997238,
          "rotation": 0,
          "target": "2-entry"
        },
        {
          "yaw": -1.7189146317264985,
          "pitch": 0.5091592550792026,
          "rotation": 0,
          "target": "6-hallway"
        },
        {
          "yaw": 1.7125226225127204,
          "pitch": 0.25163086343012253,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 1.9924697207331068,
          "pitch": 0.5231708399798833,
          "rotation": 0,
          "target": "7-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
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
      "linkHotspots": [
        {
          "yaw": -0.2664641876416969,
          "pitch": 0.5310007147804061,
          "rotation": 0,
          "target": "5-laundry-room"
        },
        {
          "yaw": 2.984322265801116,
          "pitch": 0.37098233823895477,
          "rotation": 0,
          "target": "7-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-laundry-room",
      "name": "Laundry Room",
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
          "yaw": -1.0812184459881333,
          "pitch": 0.5579924638358502,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 2.350192367027386,
          "pitch": 0.7268740298821328,
          "rotation": 0,
          "target": "0-garage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-hallway",
      "name": "Hallway",
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
          "yaw": -0.6304522043091136,
          "pitch": 0.46649033778985327,
          "rotation": 0,
          "target": "3-entry-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-dining-room",
      "name": "Dining Room",
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
          "yaw": -0.033208604851393986,
          "pitch": 0.45182912221992666,
          "rotation": 0,
          "target": "3-entry-2"
        },
        {
          "yaw": 2.6593929716111147,
          "pitch": 0.5257910822244707,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 2.6179460826499223,
          "pitch": 0.29129332024809784,
          "rotation": 0,
          "target": "5-laundry-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "C01484T59M2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
