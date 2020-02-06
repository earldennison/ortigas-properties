import {
    imperium_images,
    avila_images,
    empress_images,
    estancia_images,
    galleon_images,
    gardenHomes_images,
    viridian_images,
    royalton_images,
    maven_images,
    majorica_images,
    seville_images,
    verdantTowers_images,
    llieda_images,
    ibiza_imgaes,
    glaston_images,
    connor_images,
    ibp_images,
    ortigasBuilding_images,
} from '../assets/images/'
const propertyData = [
    {
        id:"OEVERTWR",
        name:"Verdant Towers",
        estate:"Ortigas East",
        type:"Residential",
        caption:"Verdánt Towers is located in Ortigas East, a 16-hectare mixed-use eco-estate located along C5, Ortigas Avenue, and Julia Vargas Avenue with 40% green open spaces, and interconnected roads and walkways. This newly remasterplanned development fosters a vibrant live-work-play community, carefully planned with convenienes and accessibility in mind. Be one of the first to be part of this exciting legacy. Discover how this new community will nurture your life.",
        amenities:[ "Lobby",
                    "Kid's Play Area",
                    "Function Rooms",
                    "Mail Room",
                    "Garden Deck",
                    "Fitness Facility",
                    "Lounge Pool",
                    "Resident's Lounge"
                  ],
        image_dir: verdantTowers_images,
        update_status:2,
        slug:"verdant-towers",

    },
    {
        id:"OEGLSTWR",
        name:"The Glaston Tower",
        estate:"Ortigas East",
        type:"Office",
        caption:"The Glaston Tower is a 34-storey office building that is poised to become Metro Manila's next prime business address. It will breathe new life into the office space market with its exquisite form and functionaltiy. It is currently pursuing LEED certifcation. ",
        amenities:undefined,
        image_dir: glaston_images,
        update_status:2,
        slug:"glaston-tower"

    },

    {
        id:"CCMVN",
        name:"Maven",
        estate:"Capitol Commons",
        type:"Residential",
        caption:"Maven is a 62-storey residential tower with purposefully designed living spaces perfect for the lifestyle of today's—and tomorrow's—young professionals. The third condominium to rise in Capitol Commons, Maven will offer its future residents unique facilities fit for their lifestyle of pursuing their passions.  The residential tower will feature a five-level, resorts-like amenity bar with various rooms found in each floor. It also has five Play Rooms, a unique feature of Maven, which will be found at the core of the tower. Each facility, which is 8-12 storeys high, will be designed differently and are meant to be curated spaces for residents to enjoy and draw inspiration from. These common areas are perfect for interactions among neighbors as well. Maven offers studio, 1-bedroom, 2-bedroom, and 3-bedroom units, with sizes ranging from 24 to 115 square meters. It is envisioned to be the perfect abode for those who want to experience living to the fullest. Residents will find themselves enjoying not only their homes and amenities but even the Capitol Commons community.",
        amenities:[
            "Fitness Center",
            "Party Room",
            "Garden Deck",
            "Lobby",
            "Mail Room",
            "Meeting Rooms",
            "Play Rooms",
            "Swimming Pools",
            "Game Room",
            "Media Room",
        ],
        image_dir: maven_images,
        update_status:2,
        slug:"maven"

    },
    {
        id:"CCRYL",
        name:"The Royalton",
        estate:"Capitol Commons",
        type:"Residential",
        caption:"The Royalton at Capitol Commons is a 64-storey residential condominium with breathtaking views of downtown Ortigas Center and the Pasig River, Laguna de Bay and the Sierra Madre mountain range.Inspired by the veil, the tower is uniquely designed to enthrall and excite as a veil seemingly flows on it. As a benefit of this aesthetically unique design, the tower is properly oriented from the sun and the wind, blocking off solar heat from the afternoon sun. Moreover, with its iconic shape, units in each floor vary with no two units alike. Studio, 1-bedroom, 2-bedroom, and 2-bedroom suite units are offered. The Royalton at Capitol Commons offers amenities suited for the aristocratic lifestyle. An outdoor garden space, a swimming pool, community rooms, and lounges are but some of the amenities to be enjoyed by The Royalton's residents.",
            amenities:[
                "Lobby",
                "Resident's Lounge",
                "Fitness Fascilities",
                "Concierge",
                "Garden Deck",
                "Mail Room",
                "Function Room",
                "Lap Pool",
                "Media Room",
            ],
        image_dir: royalton_images,
        update_status:3,
        slug:"royalton"

    },
    {
        id:"CCIMP",
        name:"The Imperium",
        estate:"Capitol Commons",
        type:"Residential",
        caption:"The Imperium is the most luxurious residential tower set to rise 62 storeys high in Capitol Commons. With only four to a floor of 233 large and bright two- and three-bedroom units and suites, residents of The Imperium will have the most exclusive and highly coveted address in the city.The benefits are truly spectacular and one-of-a-kind, its simple yet elegant circular form provides its residents radiant and spacious living spaces. This is uniquely complemented by its trapezoidal canted windows, reducing the need for artificial lighting while adding illumination and offering a scenic view of the city as well as of the Capitol Commons park below. Among its amenities are an infinity edge pool, an outdoor play area, landscaped garden decks, grand lobby, high performance fitness facility, recreation room, residents' lounge, function rooms and a mini theater with recliner chairs.",
        amenities:[
            "Play Area",
            "Infinity-Edge Pool",
            "Garden Deck",
            "Lobby",
            "Fitness Facility",
            "Recreation Room",
            "Residents' Lounge",
            "Function Rooms",
            "Mini Theatre",
        ],
        image_dir: imperium_images,
        update_status:2,
        slug:"imperium"
    },
    {
        id:"CCEMP",
        name:"Empress",
        estate:"Capitol Commons",
        type:"Residential",
        caption:"Situated directly in front of the Capitol Commons Park Empressa 56-storey tower that is part of the exclusive Capitol Commons residential block where everything you need is only a few steps away. Live, breathe, and take it easy in a space that embodies the true meaning of home--a sanctuary to call your own.find joy in living within the heart of a bustling city and foster a sense of self and a sense of community through a space that has been designed with your well-being in mind. &nbsp;Stretch and grow, move and prance, rest and heal--Empress is a place where wellness comes first. ",
        amenities: undefined,
        image_dir: empress_images,
        update_status:1,
        slug:"empress"

    },
    {
        id:"GHVRD",
        name:"Viridian",
        estate:"Greenhills Center",
        type:"Residential",
        caption:"The Viridian in Greenhills, a 53-storey luxury residential tower, offers generous floor layouts and uncomparable views of the Wack-Wack Golf Course, skylines of Makati and Ortigas, and Sierra Madre. Tower amenities include a 25-meter infinity pool, social hall, fitness facility, function rooms, a billiard room, and a children's play room. Within the overall Greenhills masterplan, the Viridian in Greenhills is located within the northeast sector at the corner of Connecticut and Missouri streets, still within the retail center where residents have complete access to all its features and amenities and being in the periphery of Greenhills allows for a more exclusivity and privacy. The Viridian is part of Greenhills Center's redevelopment that will transform it into a complete shop-play-live community with new shopping and dining experiences as well as improved access and parking.",
        amenities:[
            "Fitness Facility",
            "Business Lounge",
            "Sky Garden",
            "Swimming Pool",
            "Social Hall",
            "Lobby",
            "Mail Room"
        ],
        image_dir: viridian_images,
        update_status:3,
        slug:"viridian"
    },
    {
        id:"GHCNR",
        name:"Connor",
        estate:"Greenhills Center",
        type:"Residential",
        caption:"The Connor at Greenhhills is designed for function and convenience with its carefully planned unit layouts, featuring spacious cuts that are ideal for the young and the upwardly mobile, the growing families, and those looking for their own exciting and fresh spot in a vibrant yet familiar community.",
        amenities:[
            "Swimming Pool",
            "Amenity Deck",
            "Fitness Center",
            "Recreational Area",
            "Children's Area",
            "Playground",
            "Landscaped Garden",
            "Yoga And Dance Studio",
            "Meeting Room",
            "Residents' Lounge"
        ],
        image_dir: connor_images,
        update_status:2,
        slug:"connor"

    },
    {
        id:"CVAVL",
        name:"Avila",
        estate:"Circulo Verde",
        type:"Residential",
        caption:"Avila North &amp; South is a two-tower building with 25 and 41 residential floors for its North and South tower respectively, that is seamlessly linked together by a bridge with glass windows that renders great views of the community.The most economical tower that completes Phase 1 of Circulo Verde, Avila is perfect for start-up families. It is a special two-tower building that is seamlessly linked together by a bridge with glass windows that renders great views of the community.Like the other residential towers, Avila has its own Sky Garden and the Garden level units have direct access to the community park.",
        amenities:[
            "Lobby",
            "Mail Room",
            "Social Hall",
            "Residents' Lounge",
            "Swimming Pool",
            "Kids' Play Area",
            "Garden Deck",
            "Gym",
        ],
        image_dir:avila_images,
        update_status:3,
        slug:"avila"

    },
    {
        id:"CVMRSD",
        name:"Majorica Residences",
        estate:"Circulo Verde",
        type:"Residential",
        caption:"With 13 residential levels, Majorca Residences was designed with new couples, starting families, and empty nesters in mind.",
        amenities:[
            "Lobby",
            "Mail Room",
            "Swimming Pool",
            "Social Hall",
            "Residents' Lounge",
            "Kids' Play Area",
            "Sky Garden",
            "Gym",
        ],
        image_dir:majorica_images,
        update_status:3,
        slug:"majorica-residences"

    },
    {
        id:"CVITWR",
        name:"Ibiza Tower",
        estate:"Circulo Verde",
        type:"Residential",
        caption:"With 22 residential levels at the Ibiza Tower, young couples and independent individuals can choose between one- and two-bedroom units in single and bi-level layouts.",
        amenities:[
            "Lobby",
            "Mail Room",
            "Social Hall",
            "Residents' Lounge",
            "Swimming Pool",
            "Kids' Play Area",
            "Sky Garden",
            "Gym",

        ],
        image_dir:ibiza_imgaes,
        update_status:3,
        slug:"ibiza"
    },
    {
        id:"CVSRSD",
        name:"Seville Residences",
        estate:"Circulo Verde",
        type:"Residential",
        caption:"Circulo Verde's 3rd tower features 17 residential floors and 2-level podium parking. Units are specifically designed with generous floor space, giving comfort and relaxation, with a great view of the Sierra Madre mountain range.",
        amenities:[
            "Lobby",
            "Mail Room",
            "Social Hall",
            "Residents' Lounge",
            "Swimming Pool",
            "Kids' Play Area",
            "Sky Garden",
            "Gym",
        ],
        image_dir: seville_images,
        update_status:2,
        slug:"seville-residences"
    },
    {
        id:"CVLTWR",
        name:"Llieda Tower",
        estate:"Circulo Verde",
        type:"Residential",
        caption:"The 4th Circulo Verde tower, rising 25 storeys high with 22 levels devoted to residences. The first tower in Circulo Verde to offer studio units, Lleida is ideal for young professionals, independent individuals and investors.",
        amenities:[
            "Lobby",
            "Mail Room",
            "Social Hall",
            "Residents' Lounge",
            "Swimming Pool",
            "Kids' Play Area",
            "Sky Garden",
            "Gym"

        ],
        image_dir: llieda_images,
        update_status:2,
        slug:"llieda-tower"


    },
    {
        id:"CVGHMS",
        name:"Garden Homes",
        estate:"Circulo Verde",
        type:"Residential",
        caption:"Circulo Verde Garden Homes is a community of 61 townhouses of three- or four-level houses. With its low-density plan that limits the total number of residences, the community offers serenity and privacy, safety and personal space for a growing family.",
        amenities:[
            "Swimming Pool",
            "Kid's Play Area"
        ],
        image_dir: gardenHomes_images,
        update_status:3,
        slug:"garden-homes"

    },
    {
        id:"OCGLN",
        name:"Galleon",
        estate:"Ortigas Center",
        type:"Residential",
        caption:"The Galleon is a two-tower, mixed-use development of modern design having an Office for sale, Residential and Retail products, which is a unique offering within the heart of the Ortigas Center Business District. Offices at The Galleon was launched in July 2019 and the first to be offered to the market. Set at the bustling Ortigas Central Business District, this modern, functional office space has everything you need within reach. Its convenient location is one of the most desirable in Metro Manila. The Galleon reflects our culture of efficiency, comfort, and wellness, and includes an elegantly designed office lobby and retail spaces inside the building.&nbsp;Lush landscapes are found in the communal gardens and a covered parking is easily accessible for your utmost convenience.",
        amenities:undefined,
        image_dir: galleon_images,
        update_status:2,
        slug:"galleon"

    },
    {
        id:"CCEOFC",
        name:"Estancia Offices",
        estate:"Capitol Commons",
        type:"Office",
        caption:"Located atop Estancia at Capitol Commons, Estancia Offices offers a 8-floors of stress-free work environment. It currently houses international and local tenants such as Maersk, Verizon, and the like.",
        amenities:undefined,
        image_dir: estancia_images,
        update_status:2,
        slug:"estancia-offices"

    },

    {
        id:"OCOBLD",
        name:"Ortigas Building",
        estate:"Ortigas Center",
        type:"Office",
        caption:"Ortigas Building is one of the first buildings to rise in Ortigas Center. Located in the corners of Ortigas Avenue and Meralco Avenue, this 10-storey office building houses the headquarters of Ortigas & Company. ",
        amenities:undefined,
        image_dir:ortigasBuilding_images,
        update_status:undefined,
        slug:"ortigas-building"

    },
    {
        id:"OCIBP",
        name:"IBP Tower",
        estate:"Ortigas Center",
        type:"Office",
        caption:"The IBP Tower is a 27-storey office building located in the heart of the Ortigas Business District. It is a joint-venture of  Ortigas & Company with the Integrated Bar of the Philippines that aims to maximize the land use of a former parking lot of the IBP.",
        amenities:undefined,
        image_dir:ibp_images,
        update_status:undefined,
        slug:"ibp-tower"
    },


]


export default propertyData
