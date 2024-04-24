import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";



const resList = [
    {
      "info": {
        "id": "65330",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
        "locality": "Old Palasia",
        "areaName": "Navneet Tower Road",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "2456",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "30 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-16 00:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-old-palasia-navneet-tower-road-indore-65330",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "65543",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Saket Square",
        "areaName": "Old Palasia",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.2,
        "parentId": "721",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 49,
          "lastMileTravel": 4.8,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "4.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-16 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-saket-square-old-palasia-indore-65543",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "365670",
        "name": "Baskin Robbins - Ice Cream Desserts",
        "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
        "locality": "Zodiac Mall",
        "areaName": "Bicholi Mardana",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "5588",
        "avgRatingString": "4.6",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-15 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-zodiac-mall-bicholi-mardana-indore-365670",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "369489",
        "name": "Apsara Ice Creams",
        "cloudinaryImageId": "venuxnyo3iyarhnwslrs",
        "locality": "Pipliyahana",
        "areaName": "Bicholi Mardana",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "35219",
        "avgRatingString": "4.7",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-15 23:15:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/apsara-ice-creams-pipliyahana-bicholi-mardana-indore-369489",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "65127",
        "name": "Oven Story Pizza - Standout Toppings",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/5/273ab143-70ec-468d-9f57-7c77f835eeeb_65127.JPG",
        "locality": "Old Palasia",
        "areaName": "Baikunth Dham",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.5,
        "parentId": "3534",
        "avgRatingString": "4.5",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "24-34 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-15 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-old-palasia-baikunth-dham-indore-65127",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "303103",
        "name": "KFC",
        "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
        "locality": "RNT Marg",
        "areaName": "South Tukoganj",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 4.3,
        "parentId": "547",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 45,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-15 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-rnt-marg-south-tukoganj-indore-303103",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "65125",
        "name": "Faasos - Wraps, Rolls & Shawarma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/5/f93e4b53-f6f7-4b0f-a58b-2ac21009448c_65125.jpg",
        "locality": "AMAR DARSHAN BUILDING, SAKET SQUARE, KHAJRANA MAIN ROAD",
        "areaName": "Baikunth Dham",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "21809",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 47,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-15 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Rolls.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Rolls.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-amar-darshan-building-saket-square-khajrana-main-road-baikunth-dham-indore-65125",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "64814",
        "name": "The Belgian Waffle Co.",
        "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
        "locality": "Anand Bazar",
        "areaName": "Old Palasia",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Waffle",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "2233",
        "avgRatingString": "4.5",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 48,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-16 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-anand-bazar-old-palasia-indore-64814",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "157782",
        "name": "The Good Bowl",
        "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
        "locality": "Saket",
        "areaName": "Baikunth Dham",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Pastas",
          "Punjabi",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "7918",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 47,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-15 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/the-good-bowl-saket-baikunth-dham-indore-157782",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "65129",
        "name": "Sweet Truth - Cake and Desserts",
        "cloudinaryImageId": "81cf6bfe2760a45a0caf2e28716ca4d7",
        "locality": "AMAR DARSHAN BUILDING, ,SAKET SQUARE, , KHAJRANA MAIN ROAD",
        "areaName": "Baikunth Dham",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Snacks",
          "Bakery",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "4444",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-15 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹110"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-amar-darshan-building-saket-square-khajrana-main-road-baikunth-dham-indore-65129",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "65128",
        "name": "Firangi Bake",
        "cloudinaryImageId": "vox7oaxxhjjhmadfcmuk",
        "locality": "AMAR DARSHAN BUILDING, SAKET SQUARE, KHAJRANA MAIN ROAD",
        "areaName": "Baikunth Dham",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Mexican",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "3952",
        "avgRatingString": "4.3",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 50,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-15 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/firangi-bake-amar-darshan-building-saket-square-khajrana-main-road-baikunth-dham-indore-65128",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "62196",
        "name": "Subway",
        "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
        "locality": "Malhar Mega Mall",
        "areaName": "Vijay Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Healthy Food",
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.1,
        "parentId": "2",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 54,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-16 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/subway-malhar-mega-mall-vijay-nagar-indore-62196",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "65126",
        "name": "Behrouz Biryani",
        "cloudinaryImageId": "1a8dfa8b2a73ddf7c6193465ab24c898",
        "locality": "AMAR DARSHAN BUILDING, SAKET SQUARE, KHAJRANA MAIN ROAD",
        "areaName": "Baikunth Dham",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Kebabs",
          "Mughlai",
          "Beverages",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "1803",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 46,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-15 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Biryani.png",
              "description": "Delivery!"
            },
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Biryani.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹60"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/behrouz-biryani-amar-darshan-building-saket-square-khajrana-main-road-baikunth-dham-indore-65126",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "65133",
        "name": "LunchBox - Meals and Thalis",
        "cloudinaryImageId": "u22ny0m6gzwxzdff22tw",
        "locality": "AMAR DARSHAN BUILDING, ,SAKET SQUARE, , KHAJRANA MAIN ROAD",
        "areaName": "Baikunth Dham",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Punjabi",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "4925",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 46,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-15 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹159"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-amar-darshan-building-saket-square-khajrana-main-road-baikunth-dham-indore-65133",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "79829",
        "name": "Natural Ice Cream",
        "cloudinaryImageId": "mjvpnvts8c2v4hatzzus",
        "locality": "RNT Marg",
        "areaName": "Rnt Marg",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.8,
        "parentId": "2093",
        "avgRatingString": "4.8",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 42,
          "lastMileTravel": 4.8,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "4.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-15 23:55:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
              "description": "Delivery!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹74"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/natural-ice-cream-rnt-marg-indore-79829",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "84070",
        "name": "Gurukripa Restaurant - Sarwate",
        "cloudinaryImageId": "g5txnz35wlrgbskk3r8y",
        "locality": "Sarwate",
        "areaName": "South Tukoganj",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Thalis",
          "Indian",
          "Fast Food",
          "Chinese",
          "Beverages",
          "Desserts",
          "Jain",
          "Punjabi"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "92204",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 49,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-15 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
              "description": "Delivery!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/gurukripa-restaurant-sarwate-sarwate-south-tukoganj-indore-84070",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "64823",
        "name": "Nafees Restaurant",
        "cloudinaryImageId": "x7zvrb5mbg92skzncwnu",
        "locality": "Old Palasia",
        "areaName": "Old Palasia",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Mughlai",
          "Biryani",
          "Chinese",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "10713",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 48,
          "lastMileTravel": 3.9,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "3.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-15 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Biryani.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Biryani.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/nafees-restaurant-old-palasia-indore-64823",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "322540",
        "name": "UBQ BY Barbeque Nation",
        "cloudinaryImageId": "ousldxwz6z3cypd2pygf",
        "locality": "Treasure Island Mall",
        "areaName": "Tukoganj",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Barbecue",
          "Biryani",
          "Kebabs",
          "Mughlai",
          "Desserts"
        ],
        "avgRating": 4.1,
        "parentId": "10804",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 60,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-15 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-treasure-island-mall-tukoganj-indore-322540",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "86719",
        "name": "Cafe Coffee Day",
        "cloudinaryImageId": "b70c7d23d197251b7b315b7e4d8173ae",
        "locality": "TREASURE ISLAND 2 MALL INDORE MP",
        "areaName": "South Tukoganj",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Burgers",
          "Ice Cream",
          "Bakery",
          "Fast Food"
        ],
        "avgRating": 4.5,
        "parentId": "1",
        "avgRatingString": "4.5",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 49,
          "lastMileTravel": 5.5,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "5.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-15 22:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/cafe-coffee-day-treasure-island-2-mall-mp-south-tukoganj-indore-86719",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "235825",
        "name": "Biryani By Kilo",
        "cloudinaryImageId": "bf9be1c6b9d796850f426281559cb2d2",
        "locality": "Vijay Nagar",
        "areaName": "Vijay Nagar",
        "costForTwo": "₹499 for two",
        "cuisines": [
          "Biryani",
          "Hyderabadi",
          "North Indian",
          "Kebabs",
          "Mughlai",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "130",
        "avgRatingString": "4.4",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 76,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "75-80 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-04-15 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Biryani.png",
              "description": "Delivery!"
            },
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Biryani.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹80"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/biryani-by-kilo-vijay-nagar-indore-235825",
        "type": "WEBLINK"
      }
    }
  ];
 
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};
            
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); 