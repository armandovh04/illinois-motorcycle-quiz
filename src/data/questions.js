const questions = [
    {
        id: 1,
        category: 'motorcycle classification',
        question: 'A Class L license allows you to operate:',
        options: [
            'Any motorcycle',
            'A motor-driven cycle with less than 150cc displacement',
            'A motorcycle with exactly 150cc displacement',
            'Only mopeds',
        ],
        correctAnswer: 'A motor-driven cycle with less than 150cc displacement',
        explanation:
            'A Class L license covers motor-driven cycles with less than 150cc displacement. The cutoff is less than 150cc, not exactly 150cc.',
        source: 'Illinois Motorcycle Operator Manual — Motorcycle Classification',
    },
    {
        id: 2,
        category: 'motorcycle classification',
        question:
            'Which classification permits you to operate any motorcycle or motor-driven cycle?',
        options: [
            'Class A',
            'Class L',
            'Class M',
            'Class D',
        ],
        correctAnswer: 'Class M',
        explanation:
            'A Class M license allows you to operate any motorcycle or motor-driven cycle, including motorcycles with an engine displacement of 150cc or greater.',
        source: 'Illinois Motorcycle Operator Manual — Motorcycle Classification',
    },
    {
        id: 3,
        category: 'motorcycle classification',
        question:
            'Ordinarily, what must you do to add a motorcycle classification to your Illinois driver’s license?',
        options: [
            'Own a registered motorcycle',
            'Pass a separate motorcycle examination',
            'Hold a regular license for one year',
            'Complete 50 hours of supervised riding',
        ],
        correctAnswer: 'Pass a separate motorcycle examination',
        explanation:
            'Ordinarily, you must pass a separate motorcycle examination to add a motorcycle classification to your Illinois driver’s license.',
        source: 'Illinois Motorcycle Operator Manual — Motorcycle Classification',
    },
    {
        id: 4,
        category: 'motorcycle classification',
        question:
            'If you are 16 or 17 years old, what additional requirement applies?',
        options: [
            'You must own a motorcycle under 150cc',
            'You must complete an IDOT-approved motorcycle training course',
            'You must be supervised until age 21',
            'You must obtain a commercial license',
        ],
        correctAnswer:
            'You must complete an IDOT-approved motorcycle training course',
        explanation:
            'Applicants who are 16 or 17 years old must complete an IDOT-approved motorcycle training course before receiving a motorcycle classification.',
        source: 'Illinois Motorcycle Operator Manual — Motorcycle Classification',
    },
    {
        id: 5,
        category: 'motorcycle classification',
        question: 'What does a J09 restriction indicate?',
        options: [
            'You may ride only during daylight',
            'You may operate only a moped',
            'You can have the Class M classification',
            'You cannot carry a passenger',
        ],
        correctAnswer: 'You can have the Class M classification',
        explanation:
            'A J09 restriction indicates that the person may have the Class M motorcycle classification.',
        source: 'Illinois Motorcycle Operator Manual — Motorcycle Classification',
    },
    {
        id: 6,
        category: 'motorcycle classification',
        question:
            'A person who is at least 16 and completes an IDOT Motorcycle Rider Education Course is not required to:',
        options: [
            'Obtain a driver’s license',
            'Register their motorcycle',
            'Pass the written or driving motorcycle examination at a DMV',
            'Obey the instruction-permit restrictions',
        ],
        correctAnswer:
            'Pass the written or driving motorcycle examination at a DMV',
        explanation:
            'A person who is at least 16 and successfully completes the approved IDOT course does not have to take the motorcycle written or driving examination at the DMV.',
        source: 'Illinois Motorcycle Operator Manual — Motorcycle Classification',
    },
    {
        id: 7,
        category: 'motorcycle classification',
        question: 'How long is the IDOT course-completion card valid?',
        options: [
            'Six months',
            'One year',
            'Two years',
            'Until the rider turns 18',
        ],
        correctAnswer: 'One year',
        explanation:
            'The IDOT course-completion card is valid for one year and must be used before it expires.',
        source: 'Illinois Motorcycle Operator Manual — Motorcycle Classification',
    },
    {
        id: 8,
        category: 'motorcycle classification',
        question: 'Which statement is correct?',
        options: [
            'Class L covers motorcycles with 150cc or more',
            'Class M covers only motorcycles over 150cc',
            'Class L covers motor-driven cycles under 150cc, while Class M covers any motorcycle or motor-driven cycle',
            'Class L and Class M permit exactly the same vehicles',
        ],
        correctAnswer:
            'Class L covers motor-driven cycles under 150cc, while Class M covers any motorcycle or motor-driven cycle',
        explanation:
            'Class L is limited to motor-driven cycles with less than 150cc displacement. Class M permits the operation of any motorcycle or motor-driven cycle.',
        source: 'Illinois Motorcycle Operator Manual — Motorcycle Classification',
    },
    {
        id: 9,
        category: 'preparing to ride',
        question: 'Before every ride, a safe rider should:',
        options: [
            'Check the motorcycle only when something feels wrong',
            'Wear the right gear, know the motorcycle, check its equipment, and ride responsibly',
            'Warm up the motorcycle for at least 15 minutes',
            'Avoid checking the equipment if the motorcycle is new',
        ],
        correctAnswer:
            'Wear the right gear, know the motorcycle, check its equipment, and ride responsibly',
        explanation:
            'Before riding, a safe rider should wear the proper gear, become familiar with the motorcycle, check its equipment, and act responsibly.',
        source: 'Illinois Motorcycle Operator Manual — Preparing to Ride, page 3',
    },
    {
        id: 10,
        category: 'helmet use and selection',
        question: 'Under Illinois law, motorcycle helmets are:',
        options: [
            'Required for every rider',
            'Required only for riders under 18',
            'Not legally required, although properly fitted helmets greatly reduce the risk of fatal head injuries',
            'Required only on interstate highways',
        ],
        correctAnswer:
            'Not legally required, although properly fitted helmets greatly reduce the risk of fatal head injuries',
        explanation:
            'Illinois law does not require motorcycle helmets. However, wearing a properly fitted helmet greatly reduces the chance of suffering a fatal head injury in a crash.',
        source: 'Illinois Motorcycle Operator Manual — Helmet Use/Selection, page 4',
    },
    {
        id: 11,
        category: 'helmet use and selection',
        question:
            'Approximately how many motorcycle crashes result in head or neck injuries?',
        options: [
            'One out of every two',
            'One out of every five',
            'One out of every ten',
            'One out of every twenty',
        ],
        correctAnswer: 'One out of every five',
        explanation:
            'Approximately one out of every five motorcycle crashes results in a head or neck injury.',
        source: 'Illinois Motorcycle Operator Manual — Helmet Use/Selection, page 4',
    },
    {
        id: 12,
        category: 'helmet use and selection',
        question:
            'Most serious and fatal injuries suffered by motorcyclists involve the:',
        options: [
            'Arms and shoulders',
            'Legs and feet',
            'Head and neck',
            'Chest and abdomen',
        ],
        correctAnswer: 'Head and neck',
        explanation:
            'Crash analyses show that head and neck injuries account for a majority of the serious and fatal injuries suffered by motorcyclists.',
        source: 'Illinois Motorcycle Operator Manual — Helmet Use/Selection, page 4',
    },
    {
        id: 13,
        category: 'helmet use and selection',
        question:
            'What did a study of more than 900 motorcycle crashes find about helmets and a rider’s ability to see danger?',
        options: [
            'Helmets blocked danger from view in approximately 10% of crashes',
            'Full-face helmets frequently blocked a rider’s side vision',
            'There was not one case in which a helmet prevented a rider from spotting danger',
            'Only riders wearing three-quarter helmets spotted danger in time',
        ],
        correctAnswer:
            'There was not one case in which a helmet prevented a rider from spotting danger',
        explanation:
            'The study found no case in which a helmet prevented a rider from spotting danger. An approved helmet allows the rider to see as far to the sides as necessary.',
        source: 'Illinois Motorcycle Operator Manual — Helmet Use/Selection, page 4',
    },
    {
        id: 14,
        category: 'helmet use and selection',
        question: 'Most motorcycle crashes happen:',
        options: [
            'On trips longer than 100 miles',
            'During high-speed interstate travel',
            'On short trips of less than five miles, shortly after starting',
            'After the rider has been traveling for several hours',
        ],
        correctAnswer:
            'On short trips of less than five miles, shortly after starting',
        explanation:
            'Most motorcycle crashes occur on trips shorter than five miles and only a few minutes after the rider starts traveling.',
        source: 'Illinois Motorcycle Operator Manual — Helmet Use/Selection, page 4',
    },
    {
        id: 15,
        category: 'helmet use and selection',
        question:
            'Most motorcyclists are traveling at what speed when a crash occurs?',
        options: [
            'Slower than 30 mph',
            'Between 30 and 45 mph',
            'Between 45 and 60 mph',
            'Faster than 60 mph',
        ],
        correctAnswer: 'Slower than 30 mph',
        explanation:
            'Most motorcyclists are traveling slower than 30 mph when a crash occurs.',
        source: 'Illinois Motorcycle Operator Manual — Helmet Use/Selection, page 4',
    },
    {
        id: 16,
        category: 'helmet use and selection',
        question:
            'At speeds below 30 mph, helmets can reduce the number and severity of head injuries by approximately:',
        options: [
            'One-quarter',
            'One-third',
            'One-half',
            'Three-quarters',
        ],
        correctAnswer: 'One-half',
        explanation:
            'At speeds below 30 mph, helmets can reduce both the number and severity of head injuries by approximately one-half.',
        source: 'Illinois Motorcycle Operator Manual — Helmet Use/Selection, page 4',
    },
    {
        id: 17,
        category: 'helmet use and selection',
        question:
            'Compared with riders without helmets, helmeted riders are how much more likely to survive head injuries?',
        options: [
            'Twice as likely',
            'Three times as likely',
            'Four times as likely',
            'Five times as likely',
        ],
        correctAnswer: 'Three times as likely',
        explanation:
            'Helmeted riders are three times more likely to survive head injuries than riders who were not wearing helmets when the crash occurred.',
        source: 'Illinois Motorcycle Operator Manual — Helmet Use/Selection, page 4',
    },
    {
        id: 18,
        category: 'helmet use and selection',
        question:
            'What are the two primary types of motorcycle helmets described in the manual?',
        options: [
            'Open-top and closed-top',
            'Half-shell and racing',
            'Three-quarter and full-face',
            'Street and highway',
        ],
        correctAnswer: 'Three-quarter and full-face',
        explanation:
            'The two primary helmet types identified by the manual are three-quarter helmets and full-face helmets.',
        source: 'Illinois Motorcycle Operator Manual — Helmet Use/Selection, page 4',
    },
    {
        id: 19,
        category: 'helmet use and selection',
        question: 'Which characteristic should an effective helmet have?',
        options: [
            'A loose fit to allow airflow',
            'Approval under U.S. Department of Transportation and state standards',
            'Decorative padding around the outside',
            'A detachable strap that remains unfastened',
        ],
        correctAnswer:
            'Approval under U.S. Department of Transportation and state standards',
        explanation:
            'A protective helmet should meet U.S. Department of Transportation and state standards. It should also fit snugly and have no obvious defects.',
        source: 'Illinois Motorcycle Operator Manual — Helmet Use/Selection, page 4',
    },
    {
        id: 20,
        category: 'helmet use and selection',
        question:
            'Why should a helmet remain securely fastened while riding?',
        options: [
            'An unfastened helmet could fly off during a crash',
            'An unfastened helmet makes the motorcycle harder to steer',
            'It prevents the face shield from becoming scratched',
            'Illinois law requires the strap to be fastened',
        ],
        correctAnswer: 'An unfastened helmet could fly off during a crash',
        explanation:
            'If a helmet is not securely fastened, it will likely fly off the rider’s head during a crash and will not provide the intended protection.',
        source: 'Illinois Motorcycle Operator Manual — Helmet Use/Selection, page 4',
    },
    {
        id: 21,
        category: 'eye and face protection',
        question:
            'Which statement correctly compares goggles and face shields?',
        options: [
            'Goggles protect the entire face better than a face shield',
            'A face shield protects the entire face, while goggles mainly protect the eyes',
            'Neither provides protection from wind or debris',
            'Goggles and face shields provide identical protection',
        ],
        correctAnswer:
            'A face shield protects the entire face, while goggles mainly protect the eyes',
        explanation:
            'Goggles protect the rider’s eyes, but a shatter-resistant face shield helps protect the rider’s entire face from crashes, wind, rain, insects, and flying debris.',
        source: 'Illinois Motorcycle Operator Manual — Eye and Face Protection, page 5',
    },
    {
        id: 22,
        category: 'eye and face protection',
        question:
            'Why is a motorcycle windshield not a substitute for goggles or a face shield?',
        options: [
            'Windshields are illegal on Illinois motorcycles',
            'Most windshields do not adequately protect the rider’s eyes from wind and debris',
            'Windshields work only at speeds above 30 mph',
            'Windshields make helmets unnecessary',
        ],
        correctAnswer:
            'Most windshields do not adequately protect the rider’s eyes from wind and debris',
        explanation:
            'Most motorcycle windshields do not protect the rider’s eyes adequately from wind and flying debris, so proper eye or face protection is still necessary.',
        source: 'Illinois Motorcycle Operator Manual — Eye and Face Protection, page 5',
    },
    {
        id: 23,
        category: 'eye and face protection',
        question: 'Effective eye or face protection should:',
        options: [
            'Be scratch-free, penetration-resistant, securely fastened, and provide a clear view',
            'Be heavily tinted at all times',
            'Completely block airflow',
            'Fit tightly enough that eyeglasses cannot be worn underneath',
        ],
        correctAnswer:
            'Be scratch-free, penetration-resistant, securely fastened, and provide a clear view',
        explanation:
            'Effective eye or face protection must be free of scratches, resist penetration, provide a clear view to either side, fasten securely, reduce fogging, and leave room for glasses when needed.',
        source: 'Illinois Motorcycle Operator Manual — Eye and Face Protection, page 5',
    },
    {
        id: 24,
        category: 'eye and face protection',
        question: 'When should tinted eye protection not be worn?',
        options: [
            'During hot weather',
            'On interstate highways',
            'At night or whenever little light is available',
            'During trips shorter than five miles',
        ],
        correctAnswer: 'At night or whenever little light is available',
        explanation:
            'Tinted eye protection should not be worn at night or whenever little light is available because it reduces the rider’s ability to see.',
        source: 'Illinois Motorcycle Operator Manual — Eye and Face Protection, page 5',
    },
    {
        id: 25,
        category: 'protective clothing',
        question: 'How should a motorcycle jacket and pants fit?',
        options: [
            'Very loosely so they create airflow by flapping',
            'Snugly enough not to flap, but loosely enough to permit free movement',
            'Tightly enough to restrict movement',
            'Only the jacket needs to fit securely',
        ],
        correctAnswer:
            'Snugly enough not to flap, but loosely enough to permit free movement',
        explanation:
            'A jacket and pants should fit snugly enough that they do not flap in the wind but loosely enough to allow the rider to move freely.',
        source: 'Illinois Motorcycle Operator Manual — Clothing, page 5',
    },
    {
        id: 26,
        category: 'protective clothing',
        question:
            'Why does the manual recommend wearing a jacket even during warm weather?',
        options: [
            'To make the rider more visible to police',
            'To prevent dehydration and protect the rider',
            'To prevent the motorcycle from overheating',
            'Because Illinois law requires one',
        ],
        correctAnswer: 'To prevent dehydration and protect the rider',
        explanation:
            'The manual recommends wearing a riding jacket during warm weather to protect the rider and help prevent dehydration. Many jackets provide protection without causing overheating.',
        source: 'Illinois Motorcycle Operator Manual — Clothing, page 5',
    },
    {
        id: 27,
        category: 'protective clothing',
        question: 'Proper motorcycle footwear should:',
        options: [
            'Stop below the ankle and have smooth soles',
            'Cover and support the ankles and have durable, slip-resistant soles',
            'Have long heels to improve control',
            'Have loose laces for easier removal',
        ],
        correctAnswer:
            'Cover and support the ankles and have durable, slip-resistant soles',
        explanation:
            'Motorcycle boots or shoes should cover and support the ankles. Their soles should be hard, durable, and slip-resistant, while the heels should be short and the laces tucked in.',
        source: 'Illinois Motorcycle Operator Manual — Clothing, page 5',
    },
    {
        id: 28,
        category: 'protective clothing',
        question: 'Motorcycle gloves should be made from:',
        options: [
            'Thin cotton',
            'Plastic',
            'Leather or a similarly durable material',
            'Any material, provided it is waterproof',
        ],
        correctAnswer: 'Leather or a similarly durable material',
        explanation:
            'Gloves made from leather or a similarly durable material provide a better grip and help protect the rider’s hands during a crash.',
        source: 'Illinois Motorcycle Operator Manual — Clothing, page 6',
    },
    {
        id: 29,
        category: 'protective clothing',
        question: 'In cold or wet weather, motorcycle clothing should:',
        options: [
            'Keep the rider warm and dry while protecting against injury',
            'Fit loosely at the neck and wrists',
            'Allow air to inflate the clothing at high speeds',
            'Be worn only during long trips',
        ],
        correctAnswer:
            'Keep the rider warm and dry while protecting against injury',
        explanation:
            'Cold-weather and rain clothing should keep the rider warm and dry while providing protection from injury. Proper rain suits should also resist tearing or ballooning at high speeds.',
        source: 'Illinois Motorcycle Operator Manual — Clothing, page 6',
    },
    {
        id: 30,
        category: 'motorcycle fit, borrowing, and lending',
        question: 'Which modification should a rider avoid?',
        options: [
            'One recommended by the owner’s manual',
            'One that improves visibility',
            'One that makes the motorcycle harder to handle',
            'One that replaces a worn component',
        ],
        correctAnswer: 'One that makes the motorcycle harder to handle',
        explanation:
            'Riders should avoid accessories and modifications that make the motorcycle more difficult to control.',
        source: 'Illinois Motorcycle Operator Manual — Know Your Motorcycle, page 6',
    },
    {
        id: 31,
        category: 'motorcycle fit, borrowing, and lending',
        question:
            'Before riding a borrowed motorcycle, you should become familiar with it:',
        options: [
            'While traveling in normal traffic',
            'In a controlled area',
            'While riding on an interstate',
            'Only by reading its registration',
        ],
        correctAnswer: 'In a controlled area',
        explanation:
            'You should become familiar with a borrowed or unfamiliar motorcycle in a controlled area before entering traffic.',
        source: 'Illinois Motorcycle Operator Manual — Borrowing and Lending, page 6',
    },
    {
        id: 32,
        category: 'motorcycle fit, borrowing, and lending',
        question:
            'Before lending your motorcycle to someone, ensure that the person:',
        options: [
            'Owns another motorcycle',
            'Is at least 25 years old',
            'Is licensed and knows how to ride',
            'Has driven a car for at least five years',
        ],
        correctAnswer: 'Is licensed and knows how to ride',
        explanation:
            'Before lending out your motorcycle, make sure the borrower is properly licensed and knows how to ride.',
        source: 'Illinois Motorcycle Operator Manual — Borrowing and Lending, page 6',
    },
    {
        id: 33,
        category: 'motorcycle fit, borrowing, and lending',
        question:
            'More than half of all motorcycle crashes involve riders who:',
        options: [
            'Have less than six months of experience riding their motorcycles',
            'Have more than ten years of riding experience',
            'Are riding after dark',
            'Are traveling faster than 35 mph',
        ],
        correctAnswer:
            'Have less than six months of experience riding their motorcycles',
        explanation:
            'More than half of all motorcycle crashes involve riders with less than six months of experience riding their motorcycles.',
        source: 'Illinois Motorcycle Operator Manual — Borrowing and Lending, page 6',
    },
    {
        id: 34,
        category: 'motorcycle controls',
        question:
            'Before taking an unfamiliar motorcycle onto the street, you should:',
        options: [
            'Check only its brakes',
            'Review the owner’s manual and become completely familiar with the motorcycle',
            'Allow another rider to test it in traffic',
            'Assume its controls operate like those on your motorcycle',
        ],
        correctAnswer:
            'Review the owner’s manual and become completely familiar with the motorcycle',
        explanation:
            'Before entering the street, review the owner’s manual and become completely familiar with the motorcycle and its controls.',
        source: 'Illinois Motorcycle Operator Manual — Get Familiar with the Controls, page 6',
    },
    {
        id: 35,
        category: 'motorcycle controls',
        question:
            'Which controls are especially important to locate on an unfamiliar motorcycle?',
        options: [
            'Turn signals, horn, headlight switch, fuel-control valve, and engine cut-off switch',
            'Odometer, passenger footrests, and license-plate light',
            'Speedometer and seat-release mechanism only',
            'Kickstand and storage compartments only',
        ],
        correctAnswer:
            'Turn signals, horn, headlight switch, fuel-control valve, and engine cut-off switch',
        explanation:
            'Before riding an unfamiliar motorcycle, locate the turn signals, horn, headlight switch, fuel-control valve, and engine cut-off switch.',
        source: 'Illinois Motorcycle Operator Manual — Get Familiar with the Controls, page 7',
    },
    {
        id: 36,
        category: 'motorcycle controls',
        question:
            'Why should you operate the throttle, clutch, and brakes before riding an unfamiliar motorcycle?',
        options: [
            'To drain old fluids from the controls',
            'Because all motorcycle controls react exactly the same',
            'Because controls may react differently on each motorcycle',
            'To reset the motorcycle’s computer',
        ],
        correctAnswer:
            'Because controls may react differently on each motorcycle',
        explanation:
            'The throttle, clutch, and brakes may respond differently on each motorcycle, so you should test their operation before riding.',
        source: 'Illinois Motorcycle Operator Manual — Get Familiar with the Controls, page 7',
    },
    {
        id: 37,
        category: 'motorcycle controls',
        question:
            'Before riding an unfamiliar motorcycle, you should know its:',
        options: [
            'Original selling price',
            'Gear pattern',
            'Previous owner’s experience',
            'Maximum possible speed',
        ],
        correctAnswer: 'Gear pattern',
        explanation:
            'You should understand the motorcycle’s gear pattern before riding it in traffic.',
        source: 'Illinois Motorcycle Operator Manual — Get Familiar with the Controls, page 7',
    },
    {
        id: 38,
        category: 'motorcycle controls',
        question: 'When operating an unfamiliar motorcycle, you should:',
        options: [
            'Accelerate rapidly to test its power',
            'Turn faster than normal',
            'Accelerate gently, turn more slowly, and leave additional stopping room',
            'Follow other vehicles more closely',
        ],
        correctAnswer:
            'Accelerate gently, turn more slowly, and leave additional stopping room',
        explanation:
            'When riding an unfamiliar motorcycle, accelerate gently, take turns more slowly, and allow additional stopping distance.',
        source: 'Illinois Motorcycle Operator Manual — Get Familiar with the Controls, page 7',
    },
    {
        id: 39,
        category: 'checking your motorcycle',
        question:
            'Compared with a car, a motorcycle generally requires:',
        options: [
            'Less frequent attention',
            'The same amount of attention',
            'More frequent attention',
            'Attention only before long trips',
        ],
        correctAnswer: 'More frequent attention',
        explanation:
            'A motorcycle requires more frequent attention than a car because a mechanical problem can quickly become dangerous.',
        source: 'Illinois Motorcycle Operator Manual — Check Your Motorcycle, page 7',
    },
    {
        id: 40,
        category: 'checking your motorcycle',
        question:
            'How often should you perform a complete motorcycle inspection?',
        options: [
            'Once each month',
            'Before every ride',
            'Only after riding in rain',
            'Whenever the motorcycle is serviced',
        ],
        correctAnswer: 'Before every ride',
        explanation:
            'You should perform a complete inspection of your motorcycle before every ride.',
        source: 'Illinois Motorcycle Operator Manual — Check Your Motorcycle, page 7',
    },
    {
        id: 41,
        category: 'checking your motorcycle',
        question:
            'Before mounting, what should you check on the tires?',
        options: [
            'Brand, color, and manufacture location',
            'Air pressure, general wear, and tread',
            'Temperature only',
            'Whether both tires have identical markings',
        ],
        correctAnswer: 'Air pressure, general wear, and tread',
        explanation:
            'Before mounting the motorcycle, inspect the tires for proper air pressure, general wear, and adequate tread.',
        source: 'Illinois Motorcycle Operator Manual — Check Your Motorcycle, page 7',
    },
    {
        id: 42,
        category: 'checking your motorcycle',
        question:
            'At a minimum, hydraulic fluids and coolants should be checked:',
        options: [
            'Before every stop',
            'Every six months',
            'Weekly',
            'Only when a warning light appears',
        ],
        correctAnswer: 'Weekly',
        explanation:
            'Hydraulic fluids and coolants should be checked at least once each week.',
        source: 'Illinois Motorcycle Operator Manual — Check Your Motorcycle, page 7',
    },
    {
        id: 43,
        category: 'checking your motorcycle',
        question:
            'What could oil or gasoline underneath a motorcycle indicate?',
        options: [
            'The motorcycle was recently cleaned',
            'A possible leak',
            'Normal engine operation',
            'Proper tire pressure',
        ],
        correctAnswer: 'A possible leak',
        explanation:
            'Oil or gasoline underneath the motorcycle could indicate a leak that must be addressed before riding.',
        source: 'Illinois Motorcycle Operator Manual — Check Your Motorcycle, page 7',
    },
    {
        id: 44,
        category: 'checking your motorcycle',
        question:
            'When checking the headlight, verify that:',
        options: [
            'Only the low beam works',
            'Only the high beam works',
            'Both the high and low beams work',
            'It automatically switches off while riding',
        ],
        correctAnswer: 'Both the high and low beams work',
        explanation:
            'Test the headlight switch and verify that both the high and low beams operate properly.',
        source: 'Illinois Motorcycle Operator Manual — Check Your Motorcycle, page 7',
    },
    {
        id: 45,
        category: 'checking your motorcycle',
        question: 'How should you test the brake light?',
        options: [
            'Use only the front-brake control',
            'Use only the rear-brake control',
            'Test both brake controls and verify that each activates the brake light',
            'Turn on the headlight and inspect the brake light',
        ],
        correctAnswer:
            'Test both brake controls and verify that each activates the brake light',
        explanation:
            'Test the front and rear brake controls separately and confirm that each one activates the brake light.',
        source: 'Illinois Motorcycle Operator Manual — Check Your Motorcycle, page 7',
    },
    {
        id: 46,
        category: 'checking your motorcycle',
        question: 'When released, the throttle should:',
        options: [
            'Remain where you left it',
            'Snap back',
            'Move forward slowly',
            'Shut off the engine',
        ],
        correctAnswer: 'Snap back',
        explanation:
            'A properly functioning throttle should snap back when it is released.',
        source: 'Illinois Motorcycle Operator Manual — Check Your Motorcycle, page 7',
    },
    {
        id: 47,
        category: 'checking your motorcycle',
        question: 'How should the clutch feel during an inspection?',
        options: [
            'Loose and rough',
            'Tight and smooth',
            'Completely motionless',
            'Soft and uneven',
        ],
        correctAnswer: 'Tight and smooth',
        explanation:
            'The clutch should feel tight and operate smoothly during an inspection.',
        source: 'Illinois Motorcycle Operator Manual — Check Your Motorcycle, page 7',
    },
    {
        id: 48,
        category: 'checking your motorcycle',
        question:
            'When properly adjusted, mirrors should show:',
        options: [
            'Only the rider’s arms and shoulders',
            'The lane behind and as much of the adjacent lane as possible',
            'Only the motorcycle’s rear seat',
            'The motorcycle’s front wheel',
        ],
        correctAnswer:
            'The lane behind and as much of the adjacent lane as possible',
        explanation:
            'Properly adjusted mirrors should show the lane behind you and as much of the adjacent lane as possible. A small portion of your arm or shoulder may remain visible.',
        source: 'Illinois Motorcycle Operator Manual — Check Your Motorcycle, page 7',
    },
    {
        id: 49,
        category: 'checking your motorcycle',
        question:
            'Why should mirrors be cleaned and adjusted before starting?',
        options: [
            'Adjusting a mirror while riding with one hand is difficult',
            'Mirrors cannot be adjusted after the engine starts',
            'Illinois prohibits mirror adjustment in public',
            'The adjustment affects tire pressure',
        ],
        correctAnswer:
            'Adjusting a mirror while riding with one hand is difficult',
        explanation:
            'Mirrors should be cleaned and adjusted before riding because adjusting a mirror while controlling the motorcycle with one hand is difficult.',
        source: 'Illinois Motorcycle Operator Manual — Check Your Motorcycle, page 7',
    },
    {
        id: 50,
        category: 'checking your motorcycle',
        question:
            'How should the front and rear brakes be inspected?',
        options: [
            'Apply both simultaneously without mounting the motorcycle',
            'Test each separately and confirm that it feels firm and holds the motorcycle',
            'Inspect only the brake light',
            'Test only the front brake because it supplies most braking power',
        ],
        correctAnswer:
            'Test each separately and confirm that it feels firm and holds the motorcycle',
        explanation:
            'Test the front and rear brakes separately. Each brake should feel firm and hold the motorcycle when fully applied.',
        source: 'Illinois Motorcycle Operator Manual — Check Your Motorcycle, page 7',
    },
    {
        id: 51,
        category: 'checking your motorcycle',
        question:
            'Which items should be inspected at least once each week?',
        options: [
            'Wheels, cables, fasteners, and fluids',
            'Seat, paint, windshield, and license plate',
            'Horn, mirrors, helmet, and gloves',
            'Fuel, registration, and passenger footrests',
        ],
        correctAnswer: 'Wheels, cables, fasteners, and fluids',
        explanation:
            'The wheels, cables, fasteners, and fluids should be inspected at least once each week according to the owner’s manual.',
        source: 'Illinois Motorcycle Operator Manual — Check Your Motorcycle, page 8',
    },
    {
        id: 52,
        category: 'rider responsibilities',
        question:
            'To improve your visibility to other motorists, you should:',
        options: [
            'Wear proper clothing, use your headlight, and select a lane position where you can see and be seen',
            'Ride entirely on the shoulder',
            'Follow larger vehicles closely',
            'Use your horn continuously',
        ],
        correctAnswer:
            'Wear proper clothing, use your headlight, and select a lane position where you can see and be seen',
        explanation:
            'Proper clothing, an illuminated headlight, and a useful lane position help other motorists see you while allowing you to see potential hazards.',
        source: 'Illinois Motorcycle Operator Manual — Your Responsibilities, page 8',
    },
    {
        id: 53,
        category: 'rider responsibilities',
        question:
            'How should a motorcyclist communicate their intentions?',
        options: [
            'By making eye contact only',
            'By using proper signals, the brake light, and lane position',
            'By increasing engine noise',
            'By following traffic more closely',
        ],
        correctAnswer:
            'By using proper signals, the brake light, and lane position',
        explanation:
            'Motorcyclists should communicate their intentions through proper signals, brake-light use, and lane positioning.',
        source: 'Illinois Motorcycle Operator Manual — Your Responsibilities, page 8',
    },
    {
        id: 54,
        category: 'rider responsibilities',
        question:
            'An adequate space cushion is important when:',
        options: [
            'Following, being followed, sharing lanes, passing, and being passed',
            'Riding only on interstate highways',
            'Parking the motorcycle',
            'Starting the engine',
        ],
        correctAnswer:
            'Following, being followed, sharing lanes, passing, and being passed',
        explanation:
            'Maintain an adequate space cushion when following, being followed, sharing a lane, passing, or being passed.',
        source: 'Illinois Motorcycle Operator Manual — Your Responsibilities, page 8',
    },
    {
        id: 55,
        category: 'rider responsibilities',
        question:
            'How far ahead should a motorcyclist scan their intended path?',
        options: [
            'Two seconds',
            'Four seconds',
            'Eight seconds',
            'Twelve seconds',
        ],
        correctAnswer: 'Twelve seconds',
        explanation:
            'A motorcyclist should scan the intended path of travel at least 12 seconds ahead to identify and react to hazards.',
        source: 'Illinois Motorcycle Operator Manual — Your Responsibilities, page 8',
    },
    {
        id: 56,
        category: 'rider responsibilities',
        question:
            'What should a responsible rider do when faced with multiple hazards?',
        options: [
            'Focus exclusively on the closest hazard',
            'Identify and separate the hazards',
            'Accelerate past every hazard',
            'Ignore hazards outside the rider’s lane',
        ],
        correctAnswer: 'Identify and separate the hazards',
        explanation:
            'A responsible rider identifies multiple hazards and separates them instead of attempting to handle every hazard at the same time.',
        source: 'Illinois Motorcycle Operator Manual — Your Responsibilities, page 8',
    },
    {
        id: 57,
        category: 'rider responsibilities',
        question: 'Being prepared to act means:',
        options: [
            'Remaining alert and knowing proper crash-avoidance skills',
            'Carrying repair tools at all times',
            'Riding considerably slower than surrounding traffic',
            'Using the horn before every maneuver',
        ],
        correctAnswer:
            'Remaining alert and knowing proper crash-avoidance skills',
        explanation:
            'Being prepared to act means remaining alert and knowing how to perform appropriate crash-avoidance maneuvers.',
        source: 'Illinois Motorcycle Operator Manual — Your Responsibilities, page 8',
    },
    {
        id: 58,
        category: 'rider responsibilities',
        question:
            'According to the manual, who is ultimately responsible for avoiding being the cause of—or an unprepared participant in—a crash?',
        options: [
            'Other motorists',
            'Law enforcement',
            'The motorcycle manufacturer',
            'The motorcycle rider',
        ],
        correctAnswer: 'The motorcycle rider',
        explanation:
            'The motorcycle rider is ultimately responsible for avoiding causing a crash or becoming an unprepared participant in one.',
        source: 'Illinois Motorcycle Operator Manual — Your Responsibilities, page 8',
    },
    {
        id: 59,
        category: 'body position',
        question:
            'While riding, how should you position your body so that your arms can properly control the motorcycle?',
        options: [
            'Lean heavily on the handlebars',
            'Sit so your arms steer instead of supporting your body',
            'Sit far back with your arms fully extended',
            'Support your weight using the fuel tank',
        ],
        correctAnswer:
            'Sit so your arms steer instead of supporting your body',
        explanation:
            'Proper posture allows your arms to control the handlebars. If your arms are supporting your body weight, precise steering becomes more difficult.',
        source: 'Illinois Motorcycle Operator Manual — Body Position, page 9',
    },
    {
        id: 60,
        category: 'body position',
        question:
            'How far forward should you sit while holding the motorcycle’s handlegrips?',
        options: [
            'Far enough forward that your elbows touch the tank',
            'Wherever your arms remain completely straight',
            'Forward enough that your arms are slightly bent',
            'As far back as the seat permits',
        ],
        correctAnswer: 'Forward enough that your arms are slightly bent',
        explanation:
            'Slightly bent arms allow you to press the handlebars without stretching. Straight or locked arms reduce control and flexibility.',
        source: 'Illinois Motorcycle Operator Manual — Body Position, page 9',
    },
    {
        id: 61,
        category: 'body position',
        question:
            'Why should a rider begin with their right wrist flat on the throttle?',
        options: [
            'It helps prevent accidentally applying too much throttle',
            'It automatically activates the front brake',
            'It makes the clutch easier to operate',
            'It prevents the motorcycle from leaning',
        ],
        correctAnswer:
            'It helps prevent accidentally applying too much throttle',
        explanation:
            'Beginning with your right wrist flat limits unintended throttle movement and reduces the chance of sudden acceleration.',
        source: 'Illinois Motorcycle Operator Manual — Body Position, page 9',
    },
    {
        id: 62,
        category: 'body position',
        question:
            'To use the correct muscles for precise steering, where should your hands be positioned relative to your elbows?',
        options: [
            'Well above your elbows',
            'Behind your elbows',
            'Even with or below your elbows',
            'The position does not matter',
        ],
        correctAnswer: 'Even with or below your elbows',
        explanation:
            'Keeping your hands even with or below your elbows allows you to use the proper arm muscles for controlled and precise steering.',
        source: 'Illinois Motorcycle Operator Manual — Body Position, page 9',
    },
    {
        id: 63,
        category: 'body position',
        question:
            'While turning a motorcycle, why should you keep your knees against the gas tank?',
        options: [
            'To protect your knees from the handlebars',
            'To help maintain your balance',
            'To prevent the engine from overheating',
            'To increase acceleration',
        ],
        correctAnswer: 'To help maintain your balance',
        explanation:
            'Keeping your knees against the gas tank helps stabilize your body and maintain balance as the motorcycle turns.',
        source: 'Illinois Motorcycle Operator Manual — Body Position, page 9',
    },
    {
        id: 64,
        category: 'body position',
        question:
            'Which foot position gives a rider the best balance and fastest access to the motorcycle’s controls?',
        options: [
            'Feet firmly on the footrests and near the controls',
            'Feet lightly dragging along the road',
            'Toes pointed downward beneath the footrests',
            'Feet positioned as far from the controls as possible',
        ],
        correctAnswer: 'Feet firmly on the footrests and near the controls',
        explanation:
            'Keeping your feet firmly on the footrests maintains balance, while keeping them near the controls allows you to shift or brake quickly.',
        source: 'Illinois Motorcycle Operator Manual — Body Position, page 9',
    },
    {
        id: 65,
        category: 'body position',
        question:
            'Why should you avoid pointing your toes downward while riding?',
        options: [
            'It prevents you from shifting into a higher gear',
            'Your toes could become caught between the road and the footrests',
            'It causes the throttle to remain open',
            'Your feet could activate the front brake',
        ],
        correctAnswer:
            'Your toes could become caught between the road and the footrests',
        explanation:
            'Downward-pointing toes may contact the road or become caught between the road and footrests, causing injury and affecting control.',
        source: 'Illinois Motorcycle Operator Manual — Body Position, page 9',
    },
    {
        id: 66,
        category: 'shifting gears',
        question:
            'As you slow or prepare to stop a motorcycle, how should you move through the gears?',
        options: [
            'Shift directly from the highest gear into neutral',
            'Shift down through the gears while using the clutch',
            'Remain in the highest gear until completely stopped',
            'Release the clutch and then begin shifting',
        ],
        correctAnswer: 'Shift down through the gears while using the clutch',
        explanation:
            'Downshifting progressively as you slow keeps the motorcycle in an appropriate gear and prepares you to accelerate again if necessary.',
        source: 'Illinois Motorcycle Operator Manual — Shifting Gears, page 9',
    },
    {
        id: 67,
        category: 'shifting gears',
        question:
            'Why should a motorcycle ordinarily remain in first gear while stopped in traffic?',
        options: [
            'First gear prevents the brake light from turning off',
            'It allows the rider to move away quickly if necessary',
            'It prevents other vehicles from passing',
            'The motorcycle cannot idle in neutral',
        ],
        correctAnswer:
            'It allows the rider to move away quickly if necessary',
        explanation:
            'Remaining in first gear while stopped allows you to move away immediately if a vehicle approaches from behind or another danger develops.',
        source: 'Illinois Motorcycle Operator Manual — Shifting Gears, page 9',
    },
    {
        id: 68,
        category: 'shifting gears',
        question:
            'What may happen if you shift into a lower gear while the motorcycle is traveling too quickly?',
        options: [
            'The front wheel may lock automatically',
            'The motorcycle may lurch and the rear wheel may skid',
            'The engine cut-off switch may activate',
            'Both brakes may stop functioning',
        ],
        correctAnswer:
            'The motorcycle may lurch and the rear wheel may skid',
        explanation:
            'Selecting a lower gear at excessive speed can suddenly increase engine braking, causing the motorcycle to lurch or the rear wheel to skid.',
        source: 'Illinois Motorcycle Operator Manual — Shifting Gears, page 9',
    },
    {
        id: 69,
        category: 'shifting gears',
        question:
            'Before downshifting while traveling downhill, what should you do?',
        options: [
            'Use the brakes to reduce your speed sufficiently',
            'Accelerate before releasing the clutch',
            'Shift directly into first gear',
            'Turn off the engine',
        ],
        correctAnswer: 'Use the brakes to reduce your speed sufficiently',
        explanation:
            'Use the brakes to slow sufficiently before downshifting while traveling downhill or shifting into first gear.',
        source: 'Illinois Motorcycle Operator Manual — Shifting Gears, page 9',
    },
    {
        id: 70,
        category: 'shifting gears',
        question: 'How should you release the clutch when downshifting?',
        options: [
            'Suddenly, to complete the shift quickly',
            'Without reducing speed',
            'Smoothly and evenly',
            'Only after entering a turn',
        ],
        correctAnswer: 'Smoothly and evenly',
        explanation:
            'A smooth and even clutch release transfers power gradually. Releasing it suddenly can disturb the motorcycle and reduce rear-wheel traction.',
        source: 'Illinois Motorcycle Operator Manual — Shifting Gears, page 9',
    },
    {
        id: 71,
        category: 'shifting gears',
        question:
            'When approaching a turn, when should you preferably change gears?',
        options: [
            'Before entering the turn',
            'At the sharpest point of the turn',
            'Immediately after leaving the turn',
            'While leaning as far as possible',
        ],
        correctAnswer: 'Before entering the turn',
        explanation:
            'Changing gears before the turn allows you to concentrate on steering and keeps power delivery stable while the motorcycle is leaning.',
        source: 'Illinois Motorcycle Operator Manual — Shifting Gears, page 9',
    },
    {
        id: 72,
        category: 'shifting gears',
        question:
            'If you must shift gears while already traveling through a turn, why should the shift be smooth?',
        options: [
            'A sudden change in rear-wheel power could cause a skid',
            'The headlight may temporarily shut off',
            'The front brake will otherwise lock',
            'The motorcycle may automatically enter neutral',
        ],
        correctAnswer:
            'A sudden change in rear-wheel power could cause a skid',
        explanation:
            'Abrupt changes in power to the rear wheel can overwhelm the available traction and cause a skid while the motorcycle is turning.',
        source: 'Illinois Motorcycle Operator Manual — Shifting Gears, page 9',
    },
    {
        id: 73,
        category: 'braking',
        question:
            'A standard motorcycle has separate brakes controlling which wheels?',
        options: [
            'Both brakes control only the rear wheel',
            'One controls the front wheel and one controls the rear wheel',
            'Both brakes control only the front wheel',
            'One brake controls both wheels in every motorcycle',
        ],
        correctAnswer:
            'One controls the front wheel and one controls the rear wheel',
        explanation:
            'A standard motorcycle has one brake for the front wheel and another brake for the rear wheel.',
        source: 'Illinois Motorcycle Operator Manual — Braking, page 10',
    },
    {
        id: 74,
        category: 'braking',
        question:
            'Under normal conditions, how should you brake when slowing or stopping a motorcycle?',
        options: [
            'Use only the rear brake',
            'Use only the front brake',
            'Apply both brakes at the same time',
            'Alternate between the brakes',
        ],
        correctAnswer: 'Apply both brakes at the same time',
        explanation:
            'Both brakes should be used whenever slowing or stopping. This provides greater stopping power and builds proper emergency-braking habits.',
        source: 'Illinois Motorcycle Operator Manual — Braking, page 10',
    },
    {
        id: 75,
        category: 'braking',
        question:
            'Approximately how much of a motorcycle’s total stopping power can the front brake provide?',
        options: [
            'One-quarter',
            'One-half',
            'At least three-quarters',
            'Less than one-third',
        ],
        correctAnswer: 'At least three-quarters',
        explanation:
            'The front brake can provide at least three-quarters of the motorcycle’s total stopping power and is safe when used properly.',
        source: 'Illinois Motorcycle Operator Manual — Braking, page 10',
    },
    {
        id: 76,
        category: 'braking',
        question:
            'Why should riders use both brakes even during ordinary stops?',
        options: [
            'It develops the habit and skill needed to brake properly during an emergency',
            'It prevents the motorcycle from downshifting',
            'It eliminates the need to use the clutch',
            'It increases engine power after stopping',
        ],
        correctAnswer:
            'It develops the habit and skill needed to brake properly during an emergency',
        explanation:
            'Using both brakes during normal stops makes the correct technique more automatic when emergency braking is required.',
        source: 'Illinois Motorcycle Operator Manual — Braking, page 10',
    },
    {
        id: 77,
        category: 'braking',
        question:
            'Which method correctly applies the motorcycle’s brakes?',
        options: [
            'Jam the rear brake and ignore the front brake',
            'Grab the front brake suddenly and release the rear',
            'Squeeze the front brake and press down on the rear brake',
            'Apply each brake repeatedly in rapid succession',
        ],
        correctAnswer:
            'Squeeze the front brake and press down on the rear brake',
        explanation:
            'Apply both brake controls progressively by squeezing the front-brake lever and pressing down on the rear-brake control.',
        source: 'Illinois Motorcycle Operator Manual — Braking, page 10',
    },
    {
        id: 78,
        category: 'braking',
        question:
            'What can happen if you grab the front brake or jam down hard on the rear brake?',
        options: [
            'A wheel may lock and create control problems',
            'The motorcycle will stop without losing traction',
            'The clutch may automatically disengage',
            'The motorcycle will remain completely upright',
        ],
        correctAnswer: 'A wheel may lock and create control problems',
        explanation:
            'Abrupt brake application can lock a wheel, reduce traction, and make the motorcycle difficult to control.',
        source: 'Illinois Motorcycle Operator Manual — Braking, page 10',
    },
    {
        id: 79,
        category: 'braking',
        question:
            'Why is excessive braking especially dangerous while the motorcycle is leaning through a turn?',
        options: [
            'The brake light cannot activate while the motorcycle is leaning',
            'Some available traction is already being used for cornering',
            'The front brake loses all stopping power during turns',
            'Leaning automatically locks the rear brake',
        ],
        correctAnswer:
            'Some available traction is already being used for cornering',
        explanation:
            'A leaning motorcycle uses some of its available tire traction for cornering, leaving less traction available for braking.',
        source: 'Illinois Motorcycle Operator Manual — Braking, page 10',
    },
    {
        id: 80,
        category: 'braking',
        question:
            'If your motorcycle has an integrated braking system linking the front and rear brakes, where should you learn how that particular system operates?',
        options: [
            'The motorcycle’s owner’s manual',
            'The vehicle registration',
            'The license-plate application',
            'The road signs near the DMV',
        ],
        correctAnswer: 'The motorcycle’s owner’s manual',
        explanation:
            'Integrated braking systems vary between motorcycles. The owner’s manual explains how the specific system operates and should be used.',
        source: 'Illinois Motorcycle Operator Manual — Braking, page 10',
    },
    {
        id: 81,
        category: 'turning',
        question:
            'What is the correct four-step sequence for controlling a motorcycle through a turn?',
        options: [
            'Look, brake, accelerate, straighten',
            'Slow, look, lean, roll',
            'Lean, slow, stop, roll',
            'Brake, shift, look, accelerate',
        ],
        correctAnswer: 'Slow, look, lean, roll',
        explanation:
            'The correct sequence is to slow before entering, look through the turn, lean the motorcycle, and roll on the throttle.',
        source: 'Illinois Motorcycle Operator Manual — Turning, pages 10–11',
    },
    {
        id: 82,
        category: 'turning',
        question:
            'Before entering a curve, how should a rider reduce speed?',
        options: [
            'Close the throttle and apply both brakes if necessary',
            'Apply only the rear brake while accelerating',
            'Wait until the motorcycle reaches the middle of the curve',
            'Shift into neutral and coast',
        ],
        correctAnswer:
            'Close the throttle and apply both brakes if necessary',
        explanation:
            'Reduce speed before entering the curve by closing the throttle and applying both brakes if necessary.',
        source: 'Illinois Motorcycle Operator Manual — Turning, page 10',
    },
    {
        id: 83,
        category: 'turning',
        question:
            'While traveling through a turn, where should you look?',
        options: [
            'Directly at the motorcycle’s front tire',
            'At the outside edge of the roadway',
            'Through the turn toward where you want to travel',
            'At the vehicle immediately behind you',
        ],
        correctAnswer: 'Through the turn toward where you want to travel',
        explanation:
            'Looking through the turn helps guide the motorcycle along the intended path and allows you to identify hazards ahead.',
        source: 'Illinois Motorcycle Operator Manual — Turning, page 11',
    },
    {
        id: 84,
        category: 'turning',
        question:
            'When looking through a turn, which body movement is correct?',
        options: [
            'Turn your head and shoulders while tilting your eyes',
            'Turn only your head and keep your eyes level with the horizon',
            'Keep your head facing forward and move only your eyes',
            'Turn your shoulders while keeping your head straight',
        ],
        correctAnswer:
            'Turn only your head and keep your eyes level with the horizon',
        explanation:
            'Turn your head toward the intended path without turning your shoulders, and keep your eyes level with the horizon.',
        source: 'Illinois Motorcycle Operator Manual — Turning, page 11',
    },
    {
        id: 85,
        category: 'turning',
        question:
            'To make a motorcycle lean and travel to the left, you should:',
        options: [
            'Press the right handlegrip',
            'Pull upward on both handlegrips',
            'Press the left handlegrip',
            'Keep the handlebars completely motionless',
        ],
        correctAnswer: 'Press the left handlegrip',
        explanation:
            'Pressing the left handlegrip causes the motorcycle to lean and travel left: press left, lean left, go left.',
        source: 'Illinois Motorcycle Operator Manual — Turning, page 11',
    },
    {
        id: 86,
        category: 'turning',
        question:
            'How do greater speed and a tighter turn affect the amount of motorcycle lean required?',
        options: [
            'They require less lean',
            'They require more lean',
            'They eliminate the need to lean',
            'They require the rider to keep the motorcycle upright',
        ],
        correctAnswer: 'They require more lean',
        explanation:
            'Higher speeds and tighter turns require the motorcycle to lean farther to follow the intended path.',
        source: 'Illinois Motorcycle Operator Manual — Turning, page 11',
    },
    {
        id: 87,
        category: 'turning',
        question:
            'What should you do with the throttle while moving through a turn?',
        options: [
            'Roll on the throttle to maintain speed or accelerate gradually',
            'Close the throttle completely until the motorcycle is upright',
            'Open the throttle suddenly at the middle of the turn',
            'Rapidly alternate between accelerating and decelerating',
        ],
        correctAnswer:
            'Roll on the throttle to maintain speed or accelerate gradually',
        explanation:
            'Rolling on the throttle smoothly stabilizes the suspension and helps keep the motorcycle stable through the turn.',
        source: 'Illinois Motorcycle Operator Manual — Turning, page 11',
    },
    {
        id: 88,
        category: 'turning',
        question:
            'During an ordinary turn at normal speed, how should the rider and motorcycle lean?',
        options: [
            'The motorcycle should lean while the rider remains upright',
            'The rider should lean while the motorcycle remains upright',
            'They should lean together at the same angle',
            'They should lean in opposite directions',
        ],
        correctAnswer: 'They should lean together at the same angle',
        explanation:
            'During an ordinary turn, the rider and motorcycle should lean together at the same angle.',
        source: 'Illinois Motorcycle Operator Manual — Turning, page 10',
    },
    {
        id: 89,
        category: 'turning',
        question:
            'During a slow, tight turn, what should the rider generally do?',
        options: [
            'Lean with the motorcycle at exactly the same angle',
            'Lean the motorcycle while keeping their body relatively straight',
            'Keep the motorcycle completely upright and lean far inward',
            'Drag one foot along the road for balance',
        ],
        correctAnswer:
            'Lean the motorcycle while keeping their body relatively straight',
        explanation:
            'During a slow, tight turn, counterbalance by leaning the motorcycle into the turn while keeping your body relatively straight.',
        source: 'Illinois Motorcycle Operator Manual — Turning, page 10',
    },
    {
        id: 90,
        category: 'keeping your distance',
        question:
            'What gives a motorcycle rider time to react and room to maneuver when another road user makes a mistake?',
        options: [
            'Remaining beside another vehicle',
            'Maintaining a cushion of space around the motorcycle',
            'Riding faster than surrounding traffic',
            'Staying close to the roadway shoulder',
        ],
        correctAnswer:
            'Maintaining a cushion of space around the motorcycle',
        explanation:
            'A cushion of space gives you time to react and room to stop, swerve, or otherwise maneuver when another road user makes a mistake.',
        source:
            'Illinois Motorcycle Operator Manual — Keeping Your Distance, page 11',
    },
    {
        id: 91,
        category: 'lane positions',
        question:
            'How many possible paths of travel does a motorcycle have within a standard traffic lane?',
        options: [
            'One',
            'Two',
            'Five',
            'Three',
        ],
        correctAnswer: 'Three',
        explanation:
            'A motorcycle can use three paths within one traffic lane: the left portion, center portion, and right portion.',
        source:
            'Illinois Motorcycle Operator Manual — Lane Positions, page 11',
    },
    {
        id: 92,
        category: 'lane positions',
        question:
            'Which of the following is a benefit of choosing an appropriate lane position?',
        options: [
            'It can improve visibility, avoid hazards, and provide an escape route',
            'It eliminates the need to check blind spots',
            'It allows other vehicles to safely share your lane',
            'It guarantees that other motorists will see you',
        ],
        correctAnswer:
            'It can improve visibility, avoid hazards, and provide an escape route',
        explanation:
            'An appropriate lane position helps you see and be seen, avoid blind spots and surface hazards, resist wind blasts, protect your lane, communicate your intentions, and preserve an escape route.',
        source:
            'Illinois Motorcycle Operator Manual — Lane Positions, page 11',
    },
    {
        id: 93,
        category: 'lane positions',
        question:
            'Which statement about motorcycle lane positioning is correct?',
        options: [
            'The left portion is always the safest',
            'The center portion should always be avoided',
            'No single lane position is best for every traffic situation',
            'The right portion is required whenever traffic becomes heavy',
        ],
        correctAnswer:
            'No single lane position is best for every traffic situation',
        explanation:
            'The safest lane position changes according to traffic, road conditions, visibility, and surrounding hazards. No portion of the lane must always be avoided.',
        source:
            'Illinois Motorcycle Operator Manual — Lane Positions, page 11',
    },
    {
        id: 94,
        category: 'lane positions',
        question:
            'If vehicles or other potential hazards are located only on your left, which lane paths should you generally use?',
        options: [
            'Path 1 only',
            'Path 2 or path 3',
            'The roadway shoulder',
            'Path 1 or path 2',
        ],
        correctAnswer: 'Path 2 or path 3',
        explanation:
            'When hazards are located only on your left, using path 2 or path 3 creates additional separation from them.',
        source:
            'Illinois Motorcycle Operator Manual — Lane Positions, page 11',
    },
    {
        id: 95,
        category: 'lane positions',
        question:
            'If vehicles or other hazards are located only on your right, which lane paths should you generally use?',
        options: [
            'Path 3 only',
            'Path 2 or path 3',
            'The roadway shoulder',
            'Path 1 or path 2',
        ],
        correctAnswer: 'Path 1 or path 2',
        explanation:
            'When hazards are located only on your right, path 1 or path 2 generally provides greater separation from them.',
        source:
            'Illinois Motorcycle Operator Manual — Lane Positions, page 11',
    },
    {
        id: 96,
        category: 'lane positions',
        question:
            'If vehicles are traveling on both sides of your motorcycle, which lane path is usually your best option?',
        options: [
            'Path 2, the center portion',
            'Path 1, the left portion',
            'Path 3, the right portion',
            'The shoulder of the road',
        ],
        correctAnswer: 'Path 2, the center portion',
        explanation:
            'When vehicles are traveling on both sides, the center path normally provides the greatest separation from both sides.',
        source:
            'Illinois Motorcycle Operator Manual — Lane Positions, page 11',
    },
    {
        id: 97,
        category: 'lane positions',
        question:
            'Approximately how wide is the oily strip that commonly forms in the center of a traffic lane?',
        options: [
            'Approximately six feet',
            'Approximately four feet',
            'Usually no more than two feet',
            'It normally covers the entire lane',
        ],
        correctAnswer: 'Usually no more than two feet',
        explanation:
            'The oily strip formed by vehicle drippings in the center portion of a lane is normally no more than approximately two feet wide.',
        source:
            'Illinois Motorcycle Operator Manual — Lane Positions, page 12',
    },
    {
        id: 98,
        category: 'lane positions',
        question:
            'Under which condition does the average center strip of a traffic lane generally provide adequate traction?',
        options: [
            'Whenever the motorcycle is traveling slowly',
            'When the pavement is dry and there is no heavy oil buildup',
            'Only when the rider uses the rear brake',
            'During steady rainfall',
        ],
        correctAnswer:
            'When the pavement is dry and there is no heavy oil buildup',
        explanation:
            'The average center strip generally provides adequate traction when the pavement is dry. Wet pavement or a heavy oil buildup can make it hazardous.',
        source:
            'Illinois Motorcycle Operator Manual — Lane Positions, page 12',
    },
    {
        id: 99,
        category: 'lane positions',
        question:
            'Where should riders be particularly careful of large accumulations of oil and grease?',
        options: [
            'Highway entrance ramps and bridges',
            'Residential streets and driveways',
            'The left side of every rural road',
            'Busy intersections and toll booths',
        ],
        correctAnswer: 'Busy intersections and toll booths',
        explanation:
            'Large accumulations of oil and grease are commonly found at busy intersections and toll booths, where vehicles frequently stop.',
        source:
            'Illinois Motorcycle Operator Manual — Lane Positions, page 12',
    },
    {
        id: 100,
        category: 'lane positions',
        question:
            'Why should a motorcyclist change lane position as traffic conditions change?',
        options: [
            'To preserve visibility, separation, and an available escape route',
            'To prevent the motorcycle from overheating',
            'To make other motorists guess what the rider will do',
            'To avoid using the motorcycle’s turn signals',
        ],
        correctAnswer:
            'To preserve visibility, separation, and an available escape route',
        explanation:
            'Lane position should change as traffic and hazards change. A suitable position helps preserve visibility, separation from danger, and an escape route.',
        source:
            'Illinois Motorcycle Operator Manual — Lane Positions, pages 11–12',
    },
    {
        id: 101,
        category: 'following another vehicle',
        question:
            'Under normal road and traffic conditions, what minimum following distance should a motorcyclist maintain behind another vehicle?',
        options: [
            'One second',
            'Five seconds',
            'Three seconds',
            'Two seconds',
        ],
        correctAnswer: 'Three seconds',
        explanation:
            'Under normal conditions, a motorcyclist should maintain a minimum three-second following distance behind the vehicle ahead.',
        source:
            'Illinois Motorcycle Operator Manual — Following Another Vehicle, page 12',
    },
    {
        id: 102,
        category: 'following another vehicle',
        question:
            'When measuring your following distance, which type of reference point should you select?',
        options: [
            'An object inside your mirror',
            'A fixed marker on or near the road, such as a lamp post or pavement marking',
            'A vehicle traveling in the opposite direction',
            'The motorcycle’s speedometer',
        ],
        correctAnswer:
            'A fixed marker on or near the road, such as a lamp post or pavement marking',
        explanation:
            'A stationary roadside marker allows you to measure how much time passes between the vehicle ahead and your motorcycle.',
        source:
            'Illinois Motorcycle Operator Manual — Following Another Vehicle, page 12',
    },
    {
        id: 103,
        category: 'following another vehicle',
        question:
            'When using a roadside marker to measure your following distance, when should you begin counting?',
        options: [
            'When your motorcycle reaches the marker',
            'When the vehicle ahead activates its brake lights',
            'When the vehicle ahead begins accelerating',
            'When the rear bumper of the vehicle ahead passes the marker',
        ],
        correctAnswer:
            'When the rear bumper of the vehicle ahead passes the marker',
        explanation:
            'Begin counting when the rear bumper of the vehicle ahead passes your chosen fixed marker, then stop when your motorcycle reaches it.',
        source:
            'Illinois Motorcycle Operator Manual — Following Another Vehicle, page 12',
    },
    {
        id: 104,
        category: 'following another vehicle',
        question:
            'When measuring a three-second following distance, which counting method should you use?',
        options: [
            'Count slowly using “one-thousand-one, one-thousand-two,” continuing toward three',
            'Count as quickly as possible from one to three',
            'Count only after your motorcycle passes the marker',
            'Use the motorcycle’s odometer instead of counting',
        ],
        correctAnswer:
            'Count slowly using “one-thousand-one, one-thousand-two,” continuing toward three',
        explanation:
            'Using full phrases such as “one-thousand-one” helps each count represent approximately one second, making the measurement more accurate.',
        source:
            'Illinois Motorcycle Operator Manual — Following Another Vehicle, page 12',
    },
    {
        id: 105,
        category: 'following another vehicle',
        question:
            'While measuring your following distance, what does it mean if your motorcycle reaches the selected roadside marker before you count to three?',
        options: [
            'You are traveling below the speed limit',
            'You have more than enough stopping room',
            'You are following too closely',
            'The vehicle ahead is accelerating too slowly',
        ],
        correctAnswer: 'You are following too closely',
        explanation:
            'Reaching the marker before counting three seconds means there is not enough distance between your motorcycle and the vehicle ahead.',
        source:
            'Illinois Motorcycle Operator Manual — Following Another Vehicle, page 12',
    },
    {
        id: 106,
        category: 'following another vehicle',
        question:
            'What does a three-second following distance allow you to do if the vehicle ahead suddenly stops?',
        options: [
            'Remain in the vehicle’s blind spot',
            'Stop or swerve with a minimum cushion of space',
            'Pass without checking traffic',
            'Use only the rear brake',
        ],
        correctAnswer: 'Stop or swerve with a minimum cushion of space',
        explanation:
            'A three-second following distance provides a basic amount of time and space to stop or swerve if the vehicle ahead stops suddenly.',
        source:
            'Illinois Motorcycle Operator Manual — Following Another Vehicle, page 12',
    },
    {
        id: 107,
        category: 'following another vehicle',
        question:
            'Besides providing stopping or swerving room, how does a three-second following distance help a motorcyclist?',
        options: [
            'It guarantees that no vehicle can merge ahead',
            'It prevents the motorcycle from skidding',
            'It improves the rider’s view of potholes and other roadway hazards',
            'It eliminates the need to scan ahead',
        ],
        correctAnswer:
            'It improves the rider’s view of potholes and other roadway hazards',
        explanation:
            'Following farther behind provides a better view of potholes and other hazards that might otherwise be hidden by the vehicle ahead.',
        source:
            'Illinois Motorcycle Operator Manual — Following Another Vehicle, page 12',
    },
    {
        id: 108,
        category: 'following another vehicle',
        question:
            'Under which condition should a motorcyclist increase the normal three-second following distance?',
        options: [
            'When the pavement is slippery',
            'When riding on completely dry pavement with light traffic',
            'When the vehicle ahead is traveling at the speed limit',
            'When the motorcycle has a full fuel tank',
        ],
        correctAnswer: 'When the pavement is slippery',
        explanation:
            'Slippery pavement increases the distance needed to stop, so the rider should increase the normal three-second following distance.',
        source:
            'Illinois Motorcycle Operator Manual — Following Another Vehicle, page 12',
    },
    {
        id: 109,
        category: 'following another vehicle',
        question:
            'Why should you increase your following distance when you cannot see through or around the vehicle ahead?',
        options: [
            'The vehicle ahead may consume more fuel',
            'Your view of developing hazards is restricted',
            'Your motorcycle’s headlight may appear brighter',
            'The driver ahead will always begin reversing',
        ],
        correctAnswer: 'Your view of developing hazards is restricted',
        explanation:
            'If you cannot see through or around the vehicle ahead, you may not notice stopped traffic, debris, or another hazard until the leading vehicle reacts.',
        source:
            'Illinois Motorcycle Operator Manual — Following Another Vehicle, page 12',
    },
    {
        id: 110,
        category: 'following another vehicle',
        question:
            'Why might heavy traffic require a following distance greater than three seconds?',
        options: [
            'Motorcycles cannot use their front brakes in traffic',
            'The road surface always becomes slippery in traffic',
            'Vehicles ahead are prohibited from braking suddenly',
            'Another driver may squeeze into the space in front of you',
        ],
        correctAnswer:
            'Another driver may squeeze into the space in front of you',
        explanation:
            'Heavy traffic increases the likelihood that another driver will enter your following gap and reduce your available stopping distance.',
        source:
            'Illinois Motorcycle Operator Manual — Following Another Vehicle, page 12',
    },
    {
        id: 111,
        category: 'following another vehicle',
        question:
            'If your motorcycle requires more distance than normal to stop, what should you do?',
        options: [
            'Increase your following distance',
            'Follow more closely to prevent another car from merging',
            'Move beside the vehicle ahead',
            'Use only the front brake',
        ],
        correctAnswer: 'Increase your following distance',
        explanation:
            'If your motorcycle will take longer than normal to stop, create additional following distance to compensate.',
        source:
            'Illinois Motorcycle Operator Manual — Following Another Vehicle, page 12',
    },
    {
        id: 112,
        category: 'positioning behind another vehicle',
        question:
            'Even while stopped in traffic, why should a motorcyclist leave space behind the vehicle ahead?',
        options: [
            'To prevent the motorcycle’s engine from overheating',
            'To keep the front brake from locking',
            'To create room to escape if another vehicle approaches rapidly from behind',
            'To stop the other vehicle from changing lanes',
        ],
        correctAnswer:
            'To create room to escape if another vehicle approaches rapidly from behind',
        explanation:
            'Leaving space ahead gives you room to move out of the way if another vehicle approaches rapidly from behind.',
        source:
            'Illinois Motorcycle Operator Manual — Following Another Vehicle, page 13',
    },
    {
        id: 113,
        category: 'positioning behind another vehicle',
        question:
            'How can leaving space behind a stopped vehicle protect you if that vehicle unexpectedly begins reversing?',
        options: [
            'It prevents the vehicle from moving backward',
            'It gives you a cushion of space and room to react',
            'It automatically activates your horn',
            'It allows you to remain directly behind its bumper',
        ],
        correctAnswer: 'It gives you a cushion of space and room to react',
        explanation:
            'A vehicle ahead may unexpectedly reverse. Remaining farther behind gives you time and space to avoid it.',
        source:
            'Illinois Motorcycle Operator Manual — Following Another Vehicle, page 13',
    },
    {
        id: 114,
        category: 'positioning behind another vehicle',
        question:
            'When following another vehicle, where should you generally position your motorcycle so the driver ahead is most likely to see you?',
        options: [
            'In the center portion of the lane, where you appear in the driver’s rearview mirror',
            'Along the far-right edge of the lane',
            'Directly beside the vehicle’s rear wheel',
            'On the shoulder',
        ],
        correctAnswer:
            'In the center portion of the lane, where you appear in the driver’s rearview mirror',
        explanation:
            'The center portion of the lane generally places your motorcycle in the middle of the driver’s rearview mirror, where they are most likely to see you.',
        source:
            'Illinois Motorcycle Operator Manual — Following Another Vehicle, page 13',
    },
    {
        id: 115,
        category: 'positioning behind another vehicle',
        question:
            'Why is relying on the driver’s side-view mirror generally less effective than appearing in their rearview mirror?',
        options: [
            'Side-view mirrors cannot show motorcycles',
            'Motorcycles are legally prohibited from appearing in side-view mirrors',
            'Side-view mirrors only work while a vehicle is stopped',
            'Most drivers check their side-view mirrors less frequently than their rearview mirror',
        ],
        correctAnswer:
            'Most drivers check their side-view mirrors less frequently than their rearview mirror',
        explanation:
            'The far side of a lane might place you in a side-view mirror, but most drivers check those mirrors less frequently than the rearview mirror.',
        source:
            'Illinois Motorcycle Operator Manual — Following Another Vehicle, page 13',
    },
    {
        id: 116,
        category: 'positioning behind another vehicle',
        question:
            'Besides improving your visibility to the driver ahead, how can riding in the center portion of the lane help you?',
        options: [
            'It permits another vehicle to pass within your lane',
            'It discourages other motorists from attempting to share your lane',
            'It removes the need to check your mirrors',
            'It guarantees that the driver ahead cannot stop suddenly',
        ],
        correctAnswer:
            'It discourages other motorists from attempting to share your lane',
        explanation:
            'A center-lane position occupies the lane more clearly and makes other drivers less likely to attempt to squeeze past within your lane.',
        source:
            'Illinois Motorcycle Operator Manual — Following Another Vehicle, page 13',
    },
    {
        id: 117,
        category: 'being followed',
        question:
            'Why should you avoid speeding up when another driver is following your motorcycle too closely?',
        options: [
            'It usually results in the driver tailgating you at a higher and more dangerous speed',
            'It forces the other driver to pass immediately',
            'It causes your motorcycle’s brake light to remain on',
            'It prevents you from changing lanes later',
        ],
        correctAnswer:
            'It usually results in the driver tailgating you at a higher and more dangerous speed',
        explanation:
            'Speeding up does not eliminate the tailgater. It usually results in being followed too closely at a higher and more dangerous speed.',
        source:
            'Illinois Motorcycle Operator Manual — Being Followed, page 13',
    },
    {
        id: 118,
        category: 'being followed',
        question:
            'What is generally the best response when a driver is following your motorcycle too closely?',
        options: [
            'Apply the brakes suddenly',
            'Prevent the driver from passing',
            'Change lanes and allow the driver to pass',
            'Accelerate beyond the posted speed limit',
        ],
        correctAnswer: 'Change lanes and allow the driver to pass',
        explanation:
            'The safest general strategy is to change lanes and allow the tailgater to pass, placing the dangerous driver in front of you.',
        source:
            'Illinois Motorcycle Operator Manual — Being Followed, page 13',
    },
    {
        id: 119,
        category: 'being followed',
        question:
            'If a tailgater is following closely and you cannot safely change lanes, what should you do?',
        options: [
            'Maintain your exact speed and following distance',
            'Move onto the shoulder immediately',
            'Stop in the traffic lane',
            'Slow down and create additional space ahead of your motorcycle',
        ],
        correctAnswer:
            'Slow down and create additional space ahead of your motorcycle',
        explanation:
            'If you cannot change lanes, slow down gradually and open additional space ahead so you can respond without braking suddenly.',
        source:
            'Illinois Motorcycle Operator Manual — Being Followed, page 13',
    },
    {
        id: 120,
        category: 'being followed',
        question:
            'How does creating additional space ahead help when you are being tailgated?',
        options: [
            'It gives both you and the tailgater more time and room to stop',
            'It prevents the tailgater from seeing you',
            'It allows you to brake more suddenly',
            'It forces the tailgater to remain behind you',
        ],
        correctAnswer:
            'It gives both you and the tailgater more time and room to stop',
        explanation:
            'The extra distance allows you to respond more gradually and gives the tailgater additional time and space to react.',
        source:
            'Illinois Motorcycle Operator Manual — Being Followed, page 13',
    },
    {
        id: 121,
        category: 'being followed',
        question:
            'Why might gradually slowing and opening space ahead encourage a tailgater to pass?',
        options: [
            'It signals that you intend to race them',
            'It creates an easier opportunity for the driver to move ahead of you',
            'It prevents the passing lane from being used',
            'It places your motorcycle in the driver’s blind spot',
        ],
        correctAnswer:
            'It creates an easier opportunity for the driver to move ahead of you',
        explanation:
            'Gradually slowing creates an easier opportunity for the tailgater to pass, removing the immediate danger from behind your motorcycle.',
        source:
            'Illinois Motorcycle Operator Manual — Being Followed, page 13',
    },
    {
        id: 122,
        category: 'passing another vehicle',
        question:
            'Before passing another vehicle, where should a motorcyclist generally position themselves within their current lane?',
        options: [
            'In the right portion',
            'In the center portion only',
            'In the left portion',
            'On the roadway shoulder',
        ],
        correctAnswer: 'In the left portion',
        explanation:
            'Beginning from the left portion of your lane improves your view of the road ahead and makes your motorcycle more visible to other drivers.',
        source:
            'Illinois Motorcycle Operator Manual — Passing and Being Passed, page 13',
    },
    {
        id: 123,
        category: 'passing another vehicle',
        question:
            'Why should a motorcyclist begin a passing maneuver from the left portion of their lane?',
        options: [
            'It improves the rider’s line of sight and makes the motorcycle more visible',
            'It allows the rider to exceed the speed limit',
            'It prevents oncoming traffic from seeing the motorcycle',
            'It eliminates the need for a head check',
        ],
        correctAnswer:
            'It improves the rider’s line of sight and makes the motorcycle more visible',
        explanation:
            'The left position provides a clearer view around the vehicle ahead and helps surrounding drivers notice you before you enter the passing lane.',
        source:
            'Illinois Motorcycle Operator Manual — Passing and Being Passed, page 13',
    },
    {
        id: 124,
        category: 'passing another vehicle',
        question:
            'Before moving into the passing lane, what safety checks should a motorcyclist complete?',
        options: [
            'Check only the motorcycle’s rearview mirrors',
            'Sound the horn and immediately accelerate',
            'Check only for oncoming traffic',
            'Signal, check oncoming traffic, use the mirrors, and perform a head check',
        ],
        correctAnswer:
            'Signal, check oncoming traffic, use the mirrors, and perform a head check',
        explanation:
            'Mirrors may not reveal vehicles in your blind spot. Signaling and checking oncoming and following traffic helps confirm that the passing lane is clear.',
        source:
            'Illinois Motorcycle Operator Manual — Passing and Being Passed, page 13',
    },
    {
        id: 125,
        category: 'passing another vehicle',
        question:
            'Once it is safe to begin passing another vehicle, a motorcyclist should:',
        options: [
            'Remain in the original lane and slow down',
            'Move into the left lane and accelerate',
            'Move onto the shoulder',
            'Ride directly beside the vehicle without changing lanes',
        ],
        correctAnswer: 'Move into the left lane and accelerate',
        explanation:
            'Once your checks confirm that passing is legal and safe, move into the left lane and accelerate to complete the maneuver efficiently.',
        source:
            'Illinois Motorcycle Operator Manual — Passing and Being Passed, page 13',
    },
    {
        id: 126,
        category: 'passing another vehicle',
        question:
            'While passing another vehicle, which lane position should the motorcyclist choose?',
        options: [
            'A position directly beside the other vehicle',
            'A position that places the motorcycle in the vehicle’s blind spot',
            'A position that does not crowd the vehicle and provides room to avoid hazards',
            'The farthest possible position outside the marked traffic lane',
        ],
        correctAnswer:
            'A position that does not crowd the vehicle and provides room to avoid hazards',
        explanation:
            'Maintain separation from the vehicle you are passing while preserving enough space to avoid roadway hazards.',
        source:
            'Illinois Motorcycle Operator Manual — Passing and Being Passed, page 13',
    },
    {
        id: 127,
        category: 'passing another vehicle',
        question:
            'How should a motorcyclist travel through another vehicle’s blind spot while passing?',
        options: [
            'Pass through it as quickly as safely possible',
            'Remain there until the driver notices the motorcycle',
            'Match the other vehicle’s speed',
            'Slow down while remaining beside the vehicle',
        ],
        correctAnswer: 'Pass through it as quickly as safely possible',
        explanation:
            'The longer you remain in another vehicle’s blind spot, the longer the driver may be unaware of your motorcycle.',
        source:
            'Illinois Motorcycle Operator Manual — Passing and Being Passed, page 13',
    },
    {
        id: 128,
        category: 'passing another vehicle',
        question:
            'Before returning to the original lane after passing, what should a motorcyclist do?',
        options: [
            'Check only for oncoming vehicles',
            'Return immediately without signaling',
            'Look only in the rearview mirror',
            'Signal again and complete both mirror and head checks',
        ],
        correctAnswer:
            'Signal again and complete both mirror and head checks',
        explanation:
            'Before returning to your original lane, signal and use both your mirrors and a head check to confirm that you have safely cleared the vehicle.',
        source:
            'Illinois Motorcycle Operator Manual — Passing and Being Passed, page 13',
    },
    {
        id: 129,
        category: 'passing another vehicle',
        question:
            'After completing a pass and returning to the original lane, what should the rider remember to do?',
        options: [
            'Accelerate beyond the speed limit',
            'Cancel the turn signal',
            'Move immediately to the roadway shoulder',
            'Apply the rear brake',
        ],
        correctAnswer: 'Cancel the turn signal',
        explanation:
            'Motorcycle turn signals may not cancel automatically. A signal left blinking could cause another driver to misunderstand your intentions.',
        source:
            'Illinois Motorcycle Operator Manual — Passing and Being Passed, page 13',
    },
    {
        id: 130,
        category: 'passing another vehicle',
        question:
            'Which statement correctly describes the legal completion of a passing maneuver?',
        options: [
            'A rider may exceed the speed limit briefly while passing',
            'Passing is allowed anywhere if the road appears clear',
            'The pass must remain within the speed limit and occur only where permitted',
            'Motorcycles may ignore no-passing road markings',
        ],
        correctAnswer:
            'The pass must remain within the speed limit and occur only where permitted',
        explanation:
            'Passing does not allow a rider to exceed the posted speed limit or ignore signs and pavement markings that prohibit passing.',
        source:
            'Illinois Motorcycle Operator Manual — Passing and Being Passed, page 13',
    },
    {
        id: 131,
        category: 'passing another vehicle',
        question:
            'Before attempting to pass another vehicle, why must a motorcyclist understand traffic signs and roadway markings?',
        options: [
            'They indicate where passing is permitted or prohibited',
            'They identify which motorcycles have faster acceleration',
            'They replace the need to check oncoming traffic',
            'They show where riders may exceed the speed limit',
        ],
        correctAnswer:
            'They indicate where passing is permitted or prohibited',
        explanation:
            'Traffic signs and roadway markings tell riders where passing is legally permitted or prohibited.',
        source:
            'Illinois Motorcycle Operator Manual — Passing and Being Passed, page 13',
    },
    {
        id: 132,
        category: 'being passed',
        question:
            'When another vehicle is passing your motorcycle, where should you generally ride?',
        options: [
            'Along the edge nearest the passing vehicle',
            'Along the farthest edge of your lane',
            'Directly on the centerline',
            'In the center portion of your lane',
        ],
        correctAnswer: 'In the center portion of your lane',
        explanation:
            'The center portion creates more room between your motorcycle, the passing vehicle, and the outside edge of your lane.',
        source:
            'Illinois Motorcycle Operator Manual — Passing and Being Passed, page 14',
    },
    {
        id: 133,
        category: 'being passed',
        question:
            'Why should you avoid moving closer to a vehicle that is passing your motorcycle?',
        options: [
            'The driver may believe you are preparing to stop',
            'A small error by either driver could cause a sideswipe',
            'Your motorcycle will lose all available traction',
            'It prevents the passing vehicle from accelerating',
        ],
        correctAnswer:
            'A small error by either driver could cause a sideswipe',
        explanation:
            'Moving closer to the passing vehicle reduces the margin for error if either vehicle drifts from its position.',
        source:
            'Illinois Motorcycle Operator Manual — Passing and Being Passed, page 14',
    },
    {
        id: 134,
        category: 'being passed',
        question:
            'Why can the exterior mirrors of a passing vehicle endanger a motorcyclist?',
        options: [
            'Some mirrors extend beyond the vehicle’s fenders',
            'They prevent the motorcyclist from seeing forward',
            'They produce enough heat to damage the motorcycle',
            'They automatically move outward while passing',
        ],
        correctAnswer: 'Some mirrors extend beyond the vehicle’s fenders',
        explanation:
            'Drivers may forget how far their exterior mirrors extend. A rider positioned too closely could be struck even if the vehicle’s main body clears them.',
        source:
            'Illinois Motorcycle Operator Manual — Passing and Being Passed, page 14',
    },
    {
        id: 135,
        category: 'being passed',
        question:
            'How could an object thrown from a passing vehicle create a hazard for a motorcyclist?',
        options: [
            'It could activate the motorcycle’s brakes',
            'It could interfere with the passing vehicle’s engine',
            'It could strike the rider or land in the motorcycle’s path',
            'It could cause the motorcycle’s turn signal to remain on',
        ],
        correctAnswer:
            'It could strike the rider or land in the motorcycle’s path',
        explanation:
            'A passenger may not notice the motorcycle before throwing something from a window, creating an immediate impact or roadway hazard.',
        source:
            'Illinois Motorcycle Operator Manual — Passing and Being Passed, page 14',
    },
    {
        id: 136,
        category: 'being passed',
        question:
            'What effect can a wind blast from a large passing vehicle have on a motorcycle?',
        options: [
            'It improves the motorcycle’s stability',
            'It can affect the rider’s control of the motorcycle',
            'It causes the front brake to engage',
            'It prevents the motorcycle from leaning',
        ],
        correctAnswer:
            'It can affect the rider’s control of the motorcycle',
        explanation:
            'Large vehicles displace substantial amounts of air. The resulting wind blast can push the motorcycle sideways or disturb its stability.',
        source:
            'Illinois Motorcycle Operator Manual — Passing and Being Passed, page 14',
    },
    {
        id: 137,
        category: 'being passed',
        question:
            'Why is the center portion of the lane usually safest while another vehicle passes your motorcycle?',
        options: [
            'It places you closer to the passing vehicle',
            'It completely eliminates wind blasts',
            'It prevents the vehicle from returning to your lane',
            'It gives you more room for error on either side',
        ],
        correctAnswer: 'It gives you more room for error on either side',
        explanation:
            'The center position provides space to recover if the passing vehicle moves toward you or its wind blast pushes your motorcycle sideways.',
        source:
            'Illinois Motorcycle Operator Manual — Passing and Being Passed, page 14',
    },
    {
        id: 138,
        category: 'being passed',
        question:
            'Why should you avoid moving to the portion of your lane farthest from a vehicle passing you?',
        options: [
            'It may invite the driver to return to your lane too early',
            'It automatically places you above the speed limit',
            'It prevents the other driver from completing the pass',
            'It places the motorcycle outside the roadway',
        ],
        correctAnswer:
            'It may invite the driver to return to your lane too early',
        explanation:
            'Moving far away may make the passing driver believe there is more room than actually exists and encourage an early return to your lane.',
        source:
            'Illinois Motorcycle Operator Manual — Passing and Being Passed, page 14',
    },
    {
        id: 139,
        category: 'lane sharing',
        question:
            'Why do motorcycles and automobiles generally need an entire lane to operate safely?',
        options: [
            'Motorcycles are legally wider than automobiles',
            'Motorcycles cannot use the center of a lane',
            'Lane sharing provides insufficient room and is usually prohibited',
            'Automobiles cannot detect motorcycle headlights',
        ],
        correctAnswer:
            'Lane sharing provides insufficient room and is usually prohibited',
        explanation:
            'Motorcycles and automobiles each need a full lane to maneuver safely. Sharing a lane leaves little room to avoid unexpected movements or hazards.',
        source:
            'Illinois Motorcycle Operator Manual — Lane Sharing, page 14',
    },
    {
        id: 140,
        category: 'lane sharing',
        question:
            'Why is riding between rows of stopped or moving vehicles dangerous for a motorcyclist?',
        options: [
            'It prevents the motorcycle from shifting gears',
            'Unexpected hazards can suddenly enter the rider’s path',
            'The motorcycle’s brakes will become less powerful',
            'It causes the engine to overheat',
        ],
        correctAnswer:
            'Unexpected hazards can suddenly enter the rider’s path',
        explanation:
            'Riding between rows of vehicles leaves little space or time to react if a person, door, or vehicle suddenly moves into your path.',
        source:
            'Illinois Motorcycle Operator Manual — Lane Sharing, page 14',
    },
    {
        id: 141,
        category: 'lane sharing',
        question:
            'Which unexpected hazard may occur while a motorcycle travels between rows of vehicles?',
        options: [
            'Every vehicle may stop simultaneously',
            'The pavement may disappear between the lanes',
            'The motorcycle’s headlight may switch off',
            'A door may open, a hand may extend from a window, or a vehicle may turn',
        ],
        correctAnswer:
            'A door may open, a hand may extend from a window, or a vehicle may turn',
        explanation:
            'Any of these events can enter the narrow space occupied by the motorcycle without providing enough warning or room to escape.',
        source:
            'Illinois Motorcycle Operator Manual — Lane Sharing, page 14',
    },
    {
        id: 142,
        category: 'lane sharing',
        question:
            'How can a motorcyclist discourage other drivers from attempting to share their lane?',
        options: [
            'Maintain a center-portion lane position when drivers may try to squeeze past',
            'Ride along the extreme edge of the lane',
            'Switch off the motorcycle’s headlight',
            'Ride directly beside another vehicle',
        ],
        correctAnswer:
            'Maintain a center-portion lane position when drivers may try to squeeze past',
        explanation:
            'Occupying the center portion makes it clear that you require the full lane and discourages drivers from attempting to squeeze beside you.',
        source:
            'Illinois Motorcycle Operator Manual — Lane Sharing, page 14',
    },
    {
        id: 143,
        category: 'lane sharing',
        question:
            'In which traffic condition are drivers especially likely to attempt to squeeze past a motorcycle within the same lane?',
        options: [
            'On an empty rural highway',
            'While stopped alone at a railroad crossing',
            'In heavy, bumper-to-bumper traffic',
            'While the motorcycle is parked',
        ],
        correctAnswer: 'In heavy, bumper-to-bumper traffic',
        explanation:
            'Drivers may attempt to use any visible opening in congested traffic, including the unoccupied portion of a motorcyclist’s lane.',
        source:
            'Illinois Motorcycle Operator Manual — Lane Sharing, page 14',
    },
    {
        id: 144,
        category: 'lane sharing',
        question:
            'In addition to heavy traffic, when might another driver be tempted to share a motorcyclist’s lane?',
        options: [
            'Only when the motorcycle is traveling above the speed limit',
            'When passing the motorcycle, near a turn, or as the rider enters an exit lane',
            'Only while traveling through a construction zone',
            'When the motorcyclist is stopped in a private driveway',
        ],
        correctAnswer:
            'When passing the motorcycle, near a turn, or as the rider enters an exit lane',
        explanation:
            'Drivers may attempt to squeeze beside a motorcycle when passing it, when the rider is preparing to turn, or when entering an exit lane or leaving a highway.',
        source:
            'Illinois Motorcycle Operator Manual — Lane Sharing, page 14',
    },
    {
        id: 145,
        category: 'merging vehicles',
        question:
            'Why should motorcyclists be particularly alert when approaching a highway entrance ramp?',
        options: [
            'Vehicles on entrance ramps always have the right of way',
            'Motorcycles are prohibited from changing lanes near entrance ramps',
            'Entrance ramps usually have slippery pavement',
            'A merging driver may fail to see the motorcycle already on the highway',
        ],
        correctAnswer:
            'A merging driver may fail to see the motorcycle already on the highway',
        explanation:
            'A motorcycle’s smaller profile is easier to overlook, particularly when a merging driver is searching for larger vehicles.',
        source:
            'Illinois Motorcycle Operator Manual — Merging Vehicles, page 14',
    },
    {
        id: 146,
        category: 'merging vehicles',
        question:
            'If a vehicle is merging onto the highway and another lane is safely available, what should the motorcyclist do?',
        options: [
            'Change lanes to provide the merging driver with additional room',
            'Accelerate and ride beside the merging vehicle',
            'Stop in the travel lane',
            'Move onto the roadway shoulder',
        ],
        correctAnswer:
            'Change lanes to provide the merging driver with additional room',
        explanation:
            'When another lane is safely available, changing lanes separates you from the merging vehicle and reduces the chance of a conflict.',
        source:
            'Illinois Motorcycle Operator Manual — Merging Vehicles, page 14',
    },
    {
        id: 147,
        category: 'merging vehicles',
        question:
            'If you cannot change lanes while another vehicle is merging onto the highway, what should you do?',
        options: [
            'Maintain your exact position regardless of the merging vehicle',
            'Sound the horn continuously without changing speed',
            'Adjust your speed to create space for the merging driver',
            'Enter the merging vehicle’s blind spot',
        ],
        correctAnswer:
            'Adjust your speed to create space for the merging driver',
        explanation:
            'If changing lanes is impossible, adjust your speed as necessary to create a safe opening for the merging vehicle.',
        source:
            'Illinois Motorcycle Operator Manual — Merging Vehicles, page 14',
    },
    {
        id: 148,
        category: 'vehicles alongside',
        question:
            'Why should a motorcyclist avoid riding beside vehicles in neighboring lanes when it is unnecessary?',
        options: [
            'Motorcycles are not allowed to match the speed of automobiles',
            'The rider may be in a blind spot and lose an available escape route',
            'Riding beside a vehicle automatically counts as illegal passing',
            'The motorcycle will use more fuel',
        ],
        correctAnswer:
            'The rider may be in a blind spot and lose an available escape route',
        explanation:
            'The neighboring driver may not see the motorcycle, and their vehicle may block the rider from swerving away from a hazard.',
        source:
            'Illinois Motorcycle Operator Manual — Vehicles Alongside, pages 14–15',
    },
    {
        id: 149,
        category: 'vehicles alongside',
        question:
            'What could happen if a motorcycle remains in another vehicle’s blind spot?',
        options: [
            'The vehicle may change into the motorcycle’s lane without warning',
            'The motorcycle’s horn may stop working',
            'The vehicle will always slow down',
            'The rider will become more visible in the vehicle’s mirrors',
        ],
        correctAnswer:
            'The vehicle may change into the motorcycle’s lane without warning',
        explanation:
            'A driver who cannot see the motorcycle may believe the neighboring lane is empty and move into it without warning.',
        source:
            'Illinois Motorcycle Operator Manual — Vehicles Alongside, pages 14–15',
    },
    {
        id: 150,
        category: 'vehicles alongside',
        question:
            'How can a vehicle traveling beside your motorcycle interfere with your response to a hazard?',
        options: [
            'It can prevent your motorcycle from braking',
            'It can force the motorcycle into a higher gear',
            'It can prevent you from using your headlight',
            'It can block an escape path into the neighboring lane',
        ],
        correctAnswer:
            'It can block an escape path into the neighboring lane',
        explanation:
            'If danger appears in your current lane, a vehicle beside you may prevent you from moving laterally to avoid it.',
        source:
            'Illinois Motorcycle Operator Manual — Vehicles Alongside, pages 14–15',
    },
    {
        id: 151,
        category: 'vehicles alongside',
        question:
            'If another vehicle remains directly beside your motorcycle, what should you generally do?',
        options: [
            'Remain beside it so the driver remembers you are there',
            'Move closer to the vehicle’s side-view mirror',
            'Speed up or drop back until you find open space',
            'Sound the horn continuously while matching its speed',
        ],
        correctAnswer: 'Speed up or drop back until you find open space',
        explanation:
            'Avoid remaining directly beside another vehicle. Move ahead or drop back to regain visibility and open space on both sides.',
        source:
            'Illinois Motorcycle Operator Manual — Vehicles Alongside, page 15',
    },
    {
        id: 152,
        category: 'SIPDE',
        question: 'What does the motorcycle-safety process SIPDE stand for?',
        options: [
            'Stop, Inspect, Proceed, Decide, Exit',
            'Scan, Identify, Predict, Decide, Execute',
            'Search, Investigate, Position, Drive, Escape',
            'Signal, Inspect, Prepare, Direct, Enter',
        ],
        correctAnswer: 'Scan, Identify, Predict, Decide, Execute',
        explanation:
            'SIPDE is a five-step process riders use to recognize hazards, select an appropriate response, and carry it out.',
        source: 'Illinois Motorcycle Operator Manual — SIPDE, page 15',
    },
    {
        id: 153,
        category: 'SIPDE',
        question:
            'What is the main purpose of using the SIPDE process while riding a motorcycle?',
        options: [
            'To determine which motorcycle requires the least maintenance',
            'To memorize every road sign before riding',
            'To calculate the motorcycle’s stopping distance exactly',
            'To make and carry out appropriate judgments in changing traffic situations',
        ],
        correctAnswer:
            'To make and carry out appropriate judgments in changing traffic situations',
        explanation:
            'Traffic conditions constantly change. SIPDE provides an organized method for evaluating those changes and responding appropriately.',
        source: 'Illinois Motorcycle Operator Manual — SIPDE, page 15',
    },
    {
        id: 154,
        category: 'SIPDE',
        question:
            'During the “Scan” step of SIPDE, where should a motorcyclist search for potential hazards?',
        options: [
            'Ahead, to both sides, and behind',
            'Only in the lane directly ahead',
            'Only in the motorcycle’s mirrors',
            'Only at intersections',
        ],
        correctAnswer: 'Ahead, to both sides, and behind',
        explanation:
            'Scanning the entire area around the motorcycle helps you detect potential hazards before they become immediate threats.',
        source: 'Illinois Motorcycle Operator Manual — SIPDE, page 15',
    },
    {
        id: 155,
        category: 'SIPDE',
        question:
            'In which areas should a motorcyclist place extra emphasis on identifying possible escape routes?',
        options: [
            'Empty rural highways and private garages',
            'Residential driveways only',
            'Intersections, shopping areas, school zones, and construction zones',
            'Designated motorcycle parking areas',
        ],
        correctAnswer:
            'Intersections, shopping areas, school zones, and construction zones',
        explanation:
            'These areas contain frequent movements, pedestrians, limited visibility, and rapidly changing hazards, making escape routes especially important.',
        source: 'Illinois Motorcycle Operator Manual — SIPDE, page 15',
    },
    {
        id: 156,
        category: 'SIPDE',
        question:
            'Why should a rider scan especially carefully in areas with limited visibility or visually busy surroundings?',
        options: [
            'Motorcycles are prohibited in areas with limited visibility',
            'The surroundings may conceal the rider and motorcycle from other road users',
            'The motorcycle’s brakes become weaker in these locations',
            'Turn signals cannot be seen in shopping areas',
        ],
        correctAnswer:
            'The surroundings may conceal the rider and motorcycle from other road users',
        explanation:
            'Buildings, signs, vehicles, pedestrians, and visual distractions can make a motorcycle more difficult for other road users to notice.',
        source: 'Illinois Motorcycle Operator Manual — SIPDE, page 15',
    },
    {
        id: 157,
        category: 'SIPDE',
        question:
            'Which group correctly lists hazards that a motorcyclist should search for during the “Scan” step?',
        options: [
            'Only parked vehicles and traffic signals',
            'Only pedestrians and animals',
            'Only vehicles traveling directly ahead',
            'Turning traffic, cross traffic, traffic from behind, and hazardous road conditions',
        ],
        correctAnswer:
            'Turning traffic, cross traffic, traffic from behind, and hazardous road conditions',
        explanation:
            'A complete scan includes traffic from every direction along with hazardous pavement and roadway conditions.',
        source: 'Illinois Motorcycle Operator Manual — SIPDE, page 15',
    },
    {
        id: 158,
        category: 'SIPDE',
        question: 'What is the purpose of the “Identify” step in SIPDE?',
        options: [
            'To locate hazards and potential conflicts',
            'To select the fastest route to a destination',
            'To calculate fuel consumption',
            'To determine which traffic laws apply only to automobiles',
        ],
        correctAnswer: 'To locate hazards and potential conflicts',
        explanation:
            'After scanning, the rider identifies which vehicles, people, animals, or objects could create a dangerous conflict.',
        source: 'Illinois Motorcycle Operator Manual — SIPDE, page 15',
    },
    {
        id: 159,
        category: 'SIPDE',
        question:
            'Why should vehicles and other motorcycles be identified as possible hazards?',
        options: [
            'They always have the right of way',
            'They cannot change direction quickly',
            'They may move into your path and increase the risk of a crash',
            'They are required to travel faster than motorcycles',
        ],
        correctAnswer:
            'They may move into your path and increase the risk of a crash',
        explanation:
            'Vehicles and motorcycles can change speed, position, or direction and unexpectedly enter your travel path.',
        source: 'Illinois Motorcycle Operator Manual — SIPDE, page 15',
    },
    {
        id: 160,
        category: 'SIPDE',
        question:
            'During the “Identify” step, why should pedestrians and animals receive particular attention?',
        options: [
            'They are always visible from a long distance',
            'They may behave unpredictably and make quick movements',
            'They must always remain outside the roadway',
            'They are less dangerous than stationary objects',
        ],
        correctAnswer:
            'They may behave unpredictably and make quick movements',
        explanation:
            'Pedestrians and animals may suddenly enter the roadway or change direction without warning.',
        source: 'Illinois Motorcycle Operator Manual — SIPDE, page 15',
    },
    {
        id: 161,
        category: 'SIPDE',
        question:
            'How can stationary objects such as potholes, guardrails, bridges, signs, hedges, and trees affect a motorcyclist?',
        options: [
            'They may suddenly move into the rider’s path',
            'They have no effect unless another vehicle strikes them',
            'They only matter while the motorcycle is parked',
            'They can influence the rider’s route or avoidance strategy',
        ],
        correctAnswer:
            'They can influence the rider’s route or avoidance strategy',
        explanation:
            'Stationary objects cannot move into your path, but they can block your route, restrict visibility, or remove an escape option.',
        source: 'Illinois Motorcycle Operator Manual — SIPDE, page 15',
    },
    {
        id: 162,
        category: 'SIPDE',
        question:
            'During the “Predict” step of SIPDE, which characteristics of a hazard should a rider evaluate?',
        options: [
            'Its speed, distance, and direction',
            'Its color, weight, and manufacturer',
            'Its license-plate number and registration status',
            'Its fuel economy and engine size',
        ],
        correctAnswer: 'Its speed, distance, and direction',
        explanation:
            'Evaluating a hazard’s speed, distance, and direction helps the rider predict whether and where a conflict may occur.',
        source: 'Illinois Motorcycle Operator Manual — SIPDE, page 15',
    },
    {
        id: 163,
        category: 'SIPDE',
        question:
            'When predicting potential conflicts, which vehicle generally presents the most critical threat?',
        options: [
            'One that is parked in a private driveway with no driver',
            'One moving away from your path',
            'One moving into your path',
            'One remaining stationary far away',
        ],
        correctAnswer: 'One moving into your path',
        explanation:
            'A vehicle moving into your travel path presents a more immediate collision risk than one moving away or remaining stationary.',
        source: 'Illinois Motorcycle Operator Manual — SIPDE, page 16',
    },
    {
        id: 164,
        category: 'SIPDE',
        question:
            'How does mentally completing a “what if?” question help during the Predict step?',
        options: [
            'It determines who would legally receive a traffic ticket',
            'It helps estimate what could happen if you contact or attempt to avoid a hazard',
            'It guarantees that a collision will not happen',
            'It eliminates the need to make a decision',
        ],
        correctAnswer:
            'It helps estimate what could happen if you contact or attempt to avoid a hazard',
        explanation:
            'Thinking through “what if?” scenarios helps the rider anticipate possible outcomes before selecting a course of action.',
        source: 'Illinois Motorcycle Operator Manual — SIPDE, page 16',
    },
    {
        id: 165,
        category: 'SIPDE',
        question:
            'During the “Decide” step of SIPDE, what must the rider determine?',
        options: [
            'Whether another driver has a motorcycle license',
            'Which rider has the legal right of way',
            'Whether to continue scanning the roadway',
            'When, where, and how to take action',
        ],
        correctAnswer: 'When, where, and how to take action',
        explanation:
            'During the Decide step, the rider selects the safest time, location, and method for responding to the predicted danger.',
        source: 'Illinois Motorcycle Operator Manual — SIPDE, page 16',
    },
    {
        id: 166,
        category: 'SIPDE',
        question:
            'According to the manual, a rider’s decisions can be grouped according to encounters with:',
        options: [
            'One hazard, two hazards, or multiple hazards',
            'Moving hazards only',
            'Stationary hazards only',
            'Daytime or nighttime hazards',
        ],
        correctAnswer: 'One hazard, two hazards, or multiple hazards',
        explanation:
            'The number of simultaneous hazards affects how complicated the rider’s decision and response will be.',
        source: 'Illinois Motorcycle Operator Manual — SIPDE, page 16',
    },
    {
        id: 167,
        category: 'SIPDE',
        question:
            'What does the “Execute” step of SIPDE require a rider to do?',
        options: [
            'Predict where a collision could occur',
            'Locate hazards in the surrounding environment',
            'Carry out the action selected during the Decide step',
            'Review the action after completing the ride',
        ],
        correctAnswer:
            'Carry out the action selected during the Decide step',
        explanation:
            'Execute means physically performing the selected response instead of continuing to analyze the situation.',
        source: 'Illinois Motorcycle Operator Manual — SIPDE, page 16',
    },
    {
        id: 168,
        category: 'SIPDE',
        question:
            'Which actions may a rider use while executing a decision to create space or reduce harm?',
        options: [
            'Turn off the headlight and remain silent',
            'Use lights or the horn and adjust speed, position, or direction',
            'Maintain the same speed and position in every situation',
            'Remove one hand from the controls to signal other drivers',
        ],
        correctAnswer:
            'Use lights or the horn and adjust speed, position, or direction',
        explanation:
            'A rider may communicate their presence, adjust speed, or change position and direction to create space and minimize harm.',
        source: 'Illinois Motorcycle Operator Manual — SIPDE, page 16',
    },
    {
        id: 169,
        category: 'SIPDE',
        question:
            'When a motorcyclist encounters two hazards at the same time, what should they generally do?',
        options: [
            'Accelerate directly between both hazards',
            'Stop immediately between the hazards',
            'Focus entirely on the larger hazard',
            'Adjust speed so the hazards separate, then handle them individually',
        ],
        correctAnswer:
            'Adjust speed so the hazards separate, then handle them individually',
        explanation:
            'Separating two hazards allows the rider to handle them one at a time instead of facing both simultaneously.',
        source: 'Illinois Motorcycle Operator Manual — SIPDE, page 16',
    },
    {
        id: 170,
        category: 'SIPDE',
        question:
            'When dealing with three or more hazards, what should a rider do?',
        options: [
            'Weigh the consequences of each hazard and try to maintain equal distance',
            'Ignore stationary hazards and focus only on moving vehicles',
            'Always move to the left side of the lane',
            'Accelerate before making any other decision',
        ],
        correctAnswer:
            'Weigh the consequences of each hazard and try to maintain equal distance',
        explanation:
            'With three or more hazards, compare their risks and preserve as much distance as possible from each one.',
        source: 'Illinois Motorcycle Operator Manual — SIPDE, page 16',
    },
    {
        id: 171,
        category: 'SIPDE',
        question:
            'In high-risk locations such as school zones and construction zones, how should a rider prepare to react quickly?',
        options: [
            'Shift into neutral and cover the rear brake only',
            'Place both feet near the ground',
            'Cover the clutch and both brakes',
            'Keep one hand over the horn',
        ],
        correctAnswer: 'Cover the clutch and both brakes',
        explanation:
            'Covering the clutch and both brakes reduces the physical movement and time required to respond to a developing hazard.',
        source: 'Illinois Motorcycle Operator Manual — SIPDE, page 16',
    },
    {
        id: 172,
        category: 'intersections',
        question:
            'Where does the greatest potential for conflict between a motorcycle and other traffic usually occur?',
        options: [
            'On straight, empty highways',
            'At intersections',
            'In designated parking spaces',
            'Inside private garages',
        ],
        correctAnswer: 'At intersections',
        explanation:
            'Intersections create the greatest potential for conflict because vehicles, pedestrians, and motorcycles may cross one another’s paths.',
        source: 'Illinois Motorcycle Operator Manual — Intersections, page 16',
    },
    {
        id: 173,
        category: 'intersections',
        question:
            'For motorcycle-safety purposes, which location can qualify as an intersection?',
        options: [
            'Only a crossing controlled by a traffic light',
            'Only a four-way urban intersection',
            'Only a roadway containing a stop sign',
            'Any location where traffic may cross the motorcycle’s path, including a driveway',
        ],
        correctAnswer:
            'Any location where traffic may cross the motorcycle’s path, including a driveway',
        explanation:
            'An intersection includes any place where traffic can cross your path, including a residential driveway.',
        source: 'Illinois Motorcycle Operator Manual — Intersections, page 16',
    },
    {
        id: 174,
        category: 'intersections',
        question:
            'More than half of motorcycle-automobile crashes are caused by:',
        options: [
            'Drivers entering a motorcyclist’s right of way',
            'Mechanical failures on the motorcycle',
            'Riders traveling at night',
            'Motorcycles using the center of a lane',
        ],
        correctAnswer: 'Drivers entering a motorcyclist’s right of way',
        explanation:
            'The manual states that more than half of motorcycle-automobile crashes are caused by drivers entering a rider’s right of way.',
        source: 'Illinois Motorcycle Operator Manual — Intersections, page 16',
    },
    {
        id: 175,
        category: 'intersections',
        question:
            'Which vehicle movement presents one of the greatest dangers to a motorcyclist at an intersection?',
        options: [
            'A vehicle traveling away from the motorcycle',
            'A vehicle parked without an occupant',
            'A vehicle turning left in front of the motorcycle',
            'A vehicle following at a safe distance',
        ],
        correctAnswer: 'A vehicle turning left in front of the motorcycle',
        explanation:
            'A left-turning vehicle crosses directly through the rider’s path and presents one of the greatest intersection dangers.',
        source: 'Illinois Motorcycle Operator Manual — Intersections, pages 16–17',
    },
    {
        id: 176,
        category: 'intersections',
        question:
            'Why is a vehicle waiting on a side street a potential danger to a motorcyclist?',
        options: [
            'It may turn off its headlights',
            'It may pull into the motorcyclist’s lane or path',
            'It will always reverse into traffic',
            'It has the right of way over the motorcycle',
        ],
        correctAnswer: 'It may pull into the motorcyclist’s lane or path',
        explanation:
            'A driver entering from a side street may fail to notice the motorcycle and pull directly into its path.',
        source: 'Illinois Motorcycle Operator Manual — Intersections, page 17',
    },
    {
        id: 177,
        category: 'intersections',
        question:
            'Why should a motorcyclist not rely on eye contact to determine whether a driver will yield?',
        options: [
            'Eye contact is prohibited at intersections',
            'Drivers can only see motorcycles through mirrors',
            'Helmets prevent riders from seeing a driver’s eyes',
            'A driver may look directly at a rider without actually recognizing the motorcycle',
        ],
        correctAnswer:
            'A driver may look directly at a rider without actually recognizing the motorcycle',
        explanation:
            'Eye contact does not guarantee awareness. Drivers sometimes look directly toward motorcycles but mentally overlook them.',
        source: 'Illinois Motorcycle Operator Manual — Intersections, page 17',
    },
    {
        id: 178,
        category: 'intersections',
        question:
            'If another vehicle is capable of entering your path at an intersection, what should you assume?',
        options: [
            'It may enter your path',
            'The driver has already seen you',
            'It will always remain stopped',
            'It must legally allow the motorcycle to pass first',
        ],
        correctAnswer: 'It may enter your path',
        explanation:
            'Defensive riding means treating a vehicle capable of entering your path as a potential threat instead of assuming it will yield.',
        source: 'Illinois Motorcycle Operator Manual — Intersections, page 17',
    },
    {
        id: 179,
        category: 'intersections',
        question:
            'How can a rider increase the likelihood of being seen while approaching an intersection?',
        options: [
            'Ride without a headlight and stay near the curb',
            'Travel directly beside another vehicle',
            'Keep the headlight on and select a visible lane position',
            'Rapidly change lane positions',
        ],
        correctAnswer:
            'Keep the headlight on and select a visible lane position',
        explanation:
            'A lit headlight and strategic lane position improve the rider’s chances of being noticed by approaching and turning drivers.',
        source: 'Illinois Motorcycle Operator Manual — Intersections, page 17',
    },
    {
        id: 180,
        category: 'intersections',
        question:
            'Why should a rider maintain a space cushion while traveling through an intersection?',
        options: [
            'It prevents traffic signals from changing',
            'It provides room to take evasive action',
            'It guarantees that turning drivers will yield',
            'It eliminates the need to reduce speed',
        ],
        correctAnswer: 'It provides room to take evasive action',
        explanation:
            'Space around the motorcycle gives the rider somewhere to move if another vehicle unexpectedly enters the intersection.',
        source: 'Illinois Motorcycle Operator Manual — Intersections, page 17',
    },
    {
        id: 181,
        category: 'intersections',
        question:
            'When approaching a large intersection, what should a motorcyclist do to reduce reaction time?',
        options: [
            'Shift into neutral',
            'Cover only the rear brake',
            'Increase speed before entering',
            'Cover the clutch and both brakes',
        ],
        correctAnswer: 'Cover the clutch and both brakes',
        explanation:
            'Covering the clutch and both brakes shortens the time needed to respond if a vehicle suddenly turns or enters your lane.',
        source: 'Illinois Motorcycle Operator Manual — Intersections, page 17',
    },
    {
        id: 182,
        category: 'intersections',
        question:
            'How should a motorcyclist approach a large intersection?',
        options: [
            'Reduce speed and select a lane position that improves visibility',
            'Accelerate and remain in another vehicle’s blind spot',
            'Turn off the headlight to avoid distracting drivers',
            'Enter without checking cross traffic',
        ],
        correctAnswer:
            'Reduce speed and select a lane position that improves visibility',
        explanation:
            'A slower approach provides more reaction time, while proper lane positioning helps you and other drivers see one another sooner.',
        source: 'Illinois Motorcycle Operator Manual — Intersections, page 17',
    },
    {
        id: 183,
        category: 'intersections',
        question:
            'After entering a large intersection, how should a rider respond to vehicles preparing to turn?',
        options: [
            'Move directly beside them',
            'Stop in front of them',
            'Move away from them while avoiding radical speed or position changes',
            'Accelerate through their blind spots',
        ],
        correctAnswer:
            'Move away from them while avoiding radical speed or position changes',
        explanation:
            'Create separation from turning vehicles, but move smoothly so other drivers do not misunderstand your intentions.',
        source: 'Illinois Motorcycle Operator Manual — Intersections, page 17',
    },
    {
        id: 184,
        category: 'intersections',
        question:
            'Why should a rider avoid making a sudden change in speed or lane position inside an intersection?',
        options: [
            'It may cause the motorcycle’s engine to stall',
            'Another driver may mistakenly believe the motorcycle is preparing to turn',
            'The motorcycle’s headlight may shut off',
            'Sudden changes are permitted only on rural roads',
        ],
        correctAnswer:
            'Another driver may mistakenly believe the motorcycle is preparing to turn',
        explanation:
            'Sudden changes in speed or position can communicate a false intention and cause another driver to enter your path.',
        source: 'Illinois Motorcycle Operator Manual — Intersections, page 17',
    },
    {
        id: 185,
        category: 'blind intersections',
        question:
            'When approaching a blind intersection, which lane position should a motorcyclist choose?',
        options: [
            'The position farthest from every other vehicle',
            'The center position in every situation',
            'The position closest to the curb',
            'The position that brings the rider into another driver’s view as early as possible',
        ],
        correctAnswer:
            'The position that brings the rider into another driver’s view as early as possible',
        explanation:
            'Choose a position that helps cross traffic see you as early as possible while allowing you to see around visual obstructions.',
        source: 'Illinois Motorcycle Operator Manual — Blind Intersections, page 17',
    },
    {
        id: 186,
        category: 'blind intersections',
        question:
            'What is the primary goal when selecting a position at a blind intersection?',
        options: [
            'See as much as possible, remain visible, and protect your space',
            'Enter the cross lane before looking for traffic',
            'Remain completely hidden behind parked vehicles',
            'Pass through the intersection without reducing speed',
        ],
        correctAnswer:
            'See as much as possible, remain visible, and protect your space',
        explanation:
            'Good positioning at a blind intersection balances your view, your visibility to others, and your surrounding safety cushion.',
        source: 'Illinois Motorcycle Operator Manual — Blind Intersections, page 17',
    },
    {
        id: 187,
        category: 'blind intersections',
        question:
            'If a blind intersection has a stop sign or stop line, where should the rider make the first stop?',
        options: [
            'In the cross-traffic lane',
            'Past the stop line',
            'At the stop sign or stop line',
            'Beside the nearest parked vehicle',
        ],
        correctAnswer: 'At the stop sign or stop line',
        explanation:
            'Make the legally required first stop at the designated sign or line before cautiously moving forward for a better view.',
        source: 'Illinois Motorcycle Operator Manual — Blind Intersections, page 17',
    },
    {
        id: 188,
        category: 'blind intersections',
        question:
            'After making the required first stop at a blind intersection, what should the rider do?',
        options: [
            'Accelerate immediately into the intersection',
            'Edge forward and stop again before entering the cross-traffic lane',
            'Remain at the original stopping point regardless of visibility',
            'Turn the motorcycle sideways',
        ],
        correctAnswer:
            'Edge forward and stop again before entering the cross-traffic lane',
        explanation:
            'After stopping at the designated location, cautiously edge forward for a better view and stop again before entering cross traffic.',
        source: 'Illinois Motorcycle Operator Manual — Blind Intersections, pages 17–18',
    },
    {
        id: 189,
        category: 'blind intersections',
        question:
            'After edging forward at a blind intersection, how can a rider improve their view around buildings, bushes, or parked vehicles?',
        options: [
            'Dismount and walk into the intersection',
            'Place the front wheel into cross traffic',
            'Sound the horn and wait for a response',
            'Lean the body forward and look around the obstruction',
        ],
        correctAnswer:
            'Lean the body forward and look around the obstruction',
        explanation:
            'Leaning your body forward can improve your view around an obstruction without placing the motorcycle itself in danger.',
        source: 'Illinois Motorcycle Operator Manual — Blind Intersections, pages 17–18',
    },
    {
        id: 190,
        category: 'blind intersections',
        question:
            'While looking for traffic at a blind intersection, where should the motorcycle’s front wheel remain?',
        options: [
            'Outside the cross lane of travel',
            'In the middle of the cross lane',
            'Directly on the centerline',
            'Against the opposite curb',
        ],
        correctAnswer: 'Outside the cross lane of travel',
        explanation:
            'Keep the front wheel outside the cross lane while looking because placing it in cross traffic exposes you to approaching vehicles.',
        source: 'Illinois Motorcycle Operator Manual — Blind Intersections, page 18',
    },
    {
        id: 191,
        category: 'passing parked cars',
        question:
            'When passing a row of parked cars without conflicting oncoming traffic, where should a motorcyclist generally ride?',
        options: [
            'Along the extreme right edge of the lane',
            'Directly beside the parked cars',
            'Toward the left portion of the lane',
            'On the roadway shoulder',
        ],
        correctAnswer: 'Toward the left portion of the lane',
        explanation:
            'Moving toward the left creates more space from opening doors, exiting occupants, and pedestrians stepping between parked vehicles.',
        source: 'Illinois Motorcycle Operator Manual — Passing Parked Cars, page 18',
    },
    {
        id: 192,
        category: 'passing parked cars',
        question:
            'Which hazards can arise while a motorcyclist passes parked cars?',
        options: [
            'Doors may open, occupants may exit, or pedestrians may step between vehicles',
            'The motorcycle’s brakes may stop functioning',
            'Parked vehicles may cause the traffic signal to change',
            'The motorcycle may automatically shift into neutral',
        ],
        correctAnswer:
            'Doors may open, occupants may exit, or pedestrians may step between vehicles',
        explanation:
            'These hazards can enter the motorcycle’s path suddenly and with very little warning.',
        source: 'Illinois Motorcycle Operator Manual — Passing Parked Cars, page 18',
    },
    {
        id: 193,
        category: 'passing parked cars',
        question:
            'If oncoming traffic is present while you pass parked cars, which lane position is usually best?',
        options: [
            'The far-left portion next to oncoming traffic',
            'The center portion to maximize space on both sides',
            'The far-right portion beside the parked cars',
            'The oncoming lane',
        ],
        correctAnswer: 'The center portion to maximize space on both sides',
        explanation:
            'When oncoming traffic is present, the center position balances your distance from both the moving traffic and the parked vehicles.',
        source: 'Illinois Motorcycle Operator Manual — Passing Parked Cars, page 18',
    },
    {
        id: 194,
        category: 'passing parked cars',
        question:
            'What should a motorcyclist do if a parked vehicle appears likely to pull away from the curb?',
        options: [
            'Ride directly beside it so the driver can see you',
            'Assume the driver has checked for motorcycles',
            'Accelerate before the vehicle can move',
            'Slow down or change lanes to create additional room',
        ],
        correctAnswer: 'Slow down or change lanes to create additional room',
        explanation:
            'Drivers pulling away from the curb may fail to check behind or may look without recognizing the motorcycle.',
        source: 'Illinois Motorcycle Operator Manual — Passing Parked Cars, page 18',
    },
    {
        id: 195,
        category: 'passing parked cars',
        question:
            'Why can a sudden U-turn by a vehicle leaving the curb be especially dangerous to a motorcyclist?',
        options: [
            'It can block the entire roadway and leave the rider without an escape route',
            'It causes every following vehicle to reverse',
            'It only allows the rider to escape toward the curb',
            'It automatically gives the motorcyclist the right of way',
        ],
        correctAnswer:
            'It can block the entire roadway and leave the rider without an escape route',
        explanation:
            'A sudden U-turn may position the vehicle across the rider’s entire path, leaving very little room to avoid a collision.',
        source: 'Illinois Motorcycle Operator Manual — Passing Parked Cars, page 18',
    },
    {
        id: 196,
        category: 'passing parked cars',
        question:
            'If you believe a driver near the curb may make a sudden U-turn, how should you respond?',
        options: [
            'Pass immediately without reducing speed',
            'Travel directly beside the vehicle',
            'Slow down, sound your horn, and continue cautiously',
            'Turn off your headlight so you do not distract the driver',
        ],
        correctAnswer:
            'Slow down, sound your horn, and continue cautiously',
        explanation:
            'Reducing speed gives you additional reaction time, while sounding the horn may attract the driver’s attention before they enter your path.',
        source: 'Illinois Motorcycle Operator Manual — Passing Parked Cars, page 18',
    },
    {
        id: 197,
        category: 'roadside parking',
        question:
            'How should a motorcycle be positioned when parked at a roadside curb?',
        options: [
            'Parallel to the curb with the front wheel touching it',
            'At a 90-degree angle with the rear wheel touching the curb',
            'At a 45-degree angle with neither wheel touching the curb',
            'At a 90-degree angle with the front wheel touching the curb',
        ],
        correctAnswer:
            'At a 90-degree angle with the rear wheel touching the curb',
        explanation:
            'The Illinois manual instructs riders to park at a 90-degree angle to the curb with the motorcycle’s rear wheel touching it.',
        source:
            'Illinois Motorcycle Operator Manual — Parking at the Roadside and Curbs, page 18',
    },
    {
        id: 198,
        category: 'clothing and visibility',
        question: 'When do most motorcycle crashes occur?',
        options: [
            'In broad daylight',
            'Immediately after midnight',
            'During heavy rain',
            'At sunrise',
        ],
        correctAnswer: 'In broad daylight',
        explanation:
            'Most motorcycle crashes occur during daylight, so riders must make themselves visible during the day as well as at night.',
        source:
            'Illinois Motorcycle Operator Manual — Clothing and Visibility, page 19',
    },
    {
        id: 199,
        category: 'clothing and visibility',
        question:
            'What type of clothing increases a motorcycle rider’s chance of being seen?',
        options: [
            'Loose black clothing',
            'Clothing matching the pavement',
            'Bright-colored or reflective clothing',
            'Dark clothing without reflective material',
        ],
        correctAnswer: 'Bright-colored or reflective clothing',
        explanation:
            'Bright and reflective materials contrast with the surroundings, making it easier for other road users to recognize the rider.',
        source:
            'Illinois Motorcycle Operator Manual — Clothing and Visibility, page 19',
    },
    {
        id: 200,
        category: 'clothing and visibility',
        question:
            'Approximately how much of the visible rider-and-motorcycle unit is made up of the rider’s body?',
        options: [
            'One-quarter',
            'One-half',
            'Three-quarters',
            'Nearly all of it',
        ],
        correctAnswer: 'One-half',
        explanation:
            'The rider’s body accounts for approximately half of the visible rider-and-motorcycle unit, so clothing greatly affects visibility.',
        source:
            'Illinois Motorcycle Operator Manual — Clothing and Visibility, page 19',
    },
    {
        id: 201,
        category: 'clothing and visibility',
        question:
            'Which jacket or vest colors are among the best choices for increasing a motorcycle rider’s visibility?',
        options: [
            'Black, gray, brown, and navy',
            'White, beige, silver, and brown',
            'Blue, purple, black, and gray',
            'Bright orange, red, yellow, or green',
        ],
        correctAnswer: 'Bright orange, red, yellow, or green',
        explanation:
            'Bright orange, red, yellow, and green stand out strongly against most roadway backgrounds and are recommended by the manual.',
        source:
            'Illinois Motorcycle Operator Manual — Clothing and Visibility, page 19',
    },
    {
        id: 202,
        category: 'clothing and visibility',
        question:
            'Besides protecting a rider during a crash, how can a brightly colored helmet improve safety?',
        options: [
            'It can make the rider easier for other road users to see',
            'It allows the rider to travel faster',
            'It eliminates the need for reflective clothing',
            'It improves the motorcycle’s braking power',
        ],
        correctAnswer:
            'It can make the rider easier for other road users to see',
        explanation:
            'A brightly colored helmet provides crash protection while also increasing the rider’s visible surface area.',
        source:
            'Illinois Motorcycle Operator Manual — Clothing and Visibility, page 19',
    },
    {
        id: 203,
        category: 'clothing and visibility',
        question:
            'Compared with drab or dark colors, bright-colored motorcycle clothing is generally:',
        options: [
            'Less visible during daylight',
            'Only useful during rainfall',
            'Better for attracting the attention of other road users',
            'Useful only when riding at night',
        ],
        correctAnswer:
            'Better for attracting the attention of other road users',
        explanation:
            'Bright colors are generally easier for other road users to notice than dark or drab colors.',
        source:
            'Illinois Motorcycle Operator Manual — Clothing and Visibility, page 19',
    },
    {
        id: 204,
        category: 'clothing and visibility',
        question:
            'Where can reflective material be placed to help drivers approaching from the side notice a motorcycle rider?',
        options: [
            'Only on the motorcycle’s tires',
            'On the rider’s vest and the sides of the helmet',
            'Only on the motorcycle’s seat',
            'Underneath the rider’s boots',
        ],
        correctAnswer: 'On the rider’s vest and the sides of the helmet',
        explanation:
            'Reflective material on a vest and the sides of a helmet helps drivers approaching from the side detect the rider.',
        source:
            'Illinois Motorcycle Operator Manual — Clothing and Visibility, page 19',
    },
    {
        id: 205,
        category: 'clothing and visibility',
        question:
            'Reflective material can help make a motorcyclist more visible to drivers approaching from:',
        options: [
            'The front only',
            'Behind only',
            'The side only',
            'The front, rear, and sides',
        ],
        correctAnswer: 'The front, rear, and sides',
        explanation:
            'Properly placed reflective material improves visibility to drivers approaching from ahead, behind, or either side.',
        source:
            'Illinois Motorcycle Operator Manual — Clothing and Visibility, page 19',
    },
    {
        id: 206,
        category: 'headlight',
        question:
            'What is one of the best ways to help other road users see your motorcycle?',
        options: [
            'Keep the headlight on whenever the motorcycle is being operated',
            'Use the horn continuously',
            'Ride only in the left portion of every lane',
            'Turn off the headlight during daylight',
        ],
        correctAnswer:
            'Keep the headlight on whenever the motorcycle is being operated',
        explanation:
            'A continuously illuminated headlight is one of the most effective ways to make a motorcycle more noticeable.',
        source:
            'Illinois Motorcycle Operator Manual — Headlight, page 19',
    },
    {
        id: 207,
        category: 'headlight',
        question:
            'Motorcycles sold in the United States since what year have generally been designed so the headlight comes on automatically while running?',
        options: [
            '1968',
            '1988',
            '1978',
            '1998',
        ],
        correctAnswer: '1978',
        explanation:
            'Motorcycles sold in the United States since 1978 have generally been designed with headlights that turn on automatically while running.',
        source:
            'Illinois Motorcycle Operator Manual — Headlight, page 19',
    },
    {
        id: 208,
        category: 'headlight',
        question:
            'What does Illinois law require regarding a motorcycle’s headlight on streets and highways?',
        options: [
            'It must be used only after sunset',
            'It must be on while the motorcycle is being operated',
            'It is optional during daylight',
            'It is required only on interstate highways',
        ],
        correctAnswer:
            'It must be on while the motorcycle is being operated',
        explanation:
            'Illinois law requires a motorcycle’s headlight to be illuminated while the motorcycle is operated on streets and highways.',
        source:
            'Illinois Motorcycle Operator Manual — Headlight, page 19',
    },
    {
        id: 209,
        category: 'headlight',
        question:
            'Why should a motorcyclist consider using the high beam during daylight?',
        options: [
            'It reduces fuel consumption',
            'It allows the rider to travel faster',
            'It replaces the need for bright clothing',
            'It increases the chance that oncoming drivers will notice the motorcycle',
        ],
        correctAnswer:
            'It increases the chance that oncoming drivers will notice the motorcycle',
        explanation:
            'A high beam is more noticeable during daylight and can help the motorcycle stand out to approaching traffic.',
        source:
            'Illinois Motorcycle Operator Manual — Headlight, page 19',
    },
    {
        id: 210,
        category: 'headlight',
        question:
            'Which headlight beam should normally be used while riding at night?',
        options: [
            'Low beam',
            'High beam at all times',
            'No headlight when streetlights are present',
            'The parking light only',
        ],
        correctAnswer: 'Low beam',
        explanation:
            'The manual instructs riders to use the low beam at night to avoid creating excessive glare for other road users.',
        source:
            'Illinois Motorcycle Operator Manual — Headlight, page 19',
    },
    {
        id: 211,
        category: 'headlight',
        question:
            'Which headlight beam should normally be used during cloudy weather?',
        options: [
            'High beam',
            'The emergency flashers',
            'Low beam',
            'No beam during daylight hours',
        ],
        correctAnswer: 'Low beam',
        explanation:
            'Use the low beam during cloudy weather. The high beam is recommended during clear daylight to improve visibility to others.',
        source:
            'Illinois Motorcycle Operator Manual — Headlight, page 19',
    },
    {
        id: 212,
        category: 'signals',
        question:
            'What information do a motorcycle’s turn signals communicate to other road users?',
        options: [
            'The motorcycle’s current speed',
            'What the rider intends to do',
            'Whether the motorcycle needs fuel',
            'How long the rider has been licensed',
        ],
        correctAnswer: 'What the rider intends to do',
        explanation:
            'Turn signals communicate that the rider intends to turn or change lanes.',
        source:
            'Illinois Motorcycle Operator Manual — Signals, page 19',
    },
    {
        id: 213,
        category: 'signals',
        question: 'Why are signals especially important for motorcyclists?',
        options: [
            'Motorcycles cannot use brake lights',
            'Turn signals increase engine power',
            'Motorcycles are legally required to turn more slowly',
            'Riders are more vulnerable and can be more difficult to notice',
        ],
        correctAnswer:
            'Riders are more vulnerable and can be more difficult to notice',
        explanation:
            'Motorcyclists have less physical protection and a smaller visible profile, making clear communication especially important.',
        source:
            'Illinois Motorcycle Operator Manual — Signals, page 19',
    },
    {
        id: 214,
        category: 'signals',
        question: 'When should a motorcycle rider use a turn signal?',
        options: [
            'Whenever preparing to turn or change lanes',
            'Only when another vehicle is clearly visible',
            'Only at intersections controlled by traffic lights',
            'Only when entering a highway',
        ],
        correctAnswer: 'Whenever preparing to turn or change lanes',
        explanation:
            'A rider should signal every turn and lane change, even when no other road users appear to be nearby.',
        source:
            'Illinois Motorcycle Operator Manual — Signals, page 19',
    },
    {
        id: 215,
        category: 'signals',
        question:
            'Why should a rider signal even when they believe no other vehicles are nearby?',
        options: [
            'The signal improves the motorcycle’s steering',
            'The law requires the signal to remain on continuously',
            'An unseen vehicle may still be affected by the rider’s movement',
            'The signal activates the motorcycle’s headlight',
        ],
        correctAnswer:
            'An unseen vehicle may still be affected by the rider’s movement',
        explanation:
            'A vehicle the rider does not notice may still be affected by an unsignaled turn or lane change.',
        source:
            'Illinois Motorcycle Operator Manual — Signals, page 19',
    },
    {
        id: 216,
        category: 'signals',
        question:
            'Besides communicating the rider’s intentions, how do turn signals improve motorcycle safety?',
        options: [
            'They reduce the motorcycle’s stopping distance',
            'They make the motorcycle easier for other road users to notice',
            'They prevent other vehicles from changing lanes',
            'They automatically cancel the motorcycle’s blind spots',
        ],
        correctAnswer:
            'They make the motorcycle easier for other road users to notice',
        explanation:
            'Blinking turn signals attract attention in addition to communicating the rider’s intended movement.',
        source:
            'Illinois Motorcycle Operator Manual — Signals, page 19',
    },
    {
        id: 217,
        category: 'signals',
        question:
            'How can using a turn signal while entering a freeway help a motorcyclist?',
        options: [
            'It gives the motorcycle automatic right of way',
            'It permits the rider to ignore traffic already on the freeway',
            'It causes vehicles ahead to accelerate',
            'Drivers approaching from behind may notice the signal and create room',
        ],
        correctAnswer:
            'Drivers approaching from behind may notice the signal and create room',
        explanation:
            'A blinking turn signal can alert freeway traffic that the motorcycle intends to merge, encouraging drivers to create space.',
        source:
            'Illinois Motorcycle Operator Manual — Signals, pages 19–20',
    },
    {
        id: 218,
        category: 'signals',
        question:
            'Why should a rider activate the turn signal before beginning a turn?',
        options: [
            'It reduces confusion and gives other drivers time to respond',
            'It allows the rider to use only the rear brake',
            'It eliminates the need to check mirrors',
            'It prevents pedestrians from entering the roadway',
        ],
        correctAnswer:
            'It reduces confusion and gives other drivers time to respond',
        explanation:
            'Early signaling allows other road users to understand the rider’s intentions before the motorcycle begins changing direction.',
        source:
            'Illinois Motorcycle Operator Manual — Signals, page 20',
    },
    {
        id: 219,
        category: 'signals',
        question:
            'Why is it important to cancel a motorcycle’s turn signal after completing a turn?',
        options: [
            'The signal may drain the motorcycle’s fuel',
            'The headlight will otherwise turn off',
            'Another driver may think the rider intends to turn again and enter the rider’s path',
            'The motorcycle cannot change gears while the signal is active',
        ],
        correctAnswer:
            'Another driver may think the rider intends to turn again and enter the rider’s path',
        explanation:
            'Motorcycle signals may not cancel automatically. A signal left blinking can communicate false information to other drivers.',
        source:
            'Illinois Motorcycle Operator Manual — Signals, page 20',
    },
    {
        id: 220,
        category: 'signals',
        question:
            'Should a motorcyclist use a turn signal when the planned movement appears obvious?',
        options: [
            'No, because obvious movements do not affect other drivers',
            'Yes, because signals increase visibility and prevent others from guessing',
            'No, unless a police officer is nearby',
            'Yes, but only during nighttime riding',
        ],
        correctAnswer:
            'Yes, because signals increase visibility and prevent others from guessing',
        explanation:
            'Even when a movement appears obvious, signaling confirms the rider’s intentions and makes the motorcycle easier to notice.',
        source:
            'Illinois Motorcycle Operator Manual — Signals, page 20',
    },
    {
        id: 221,
        category: 'brake light',
        question:
            'Compared with a car’s brake lights, a motorcycle’s brake light is usually:',
        options: [
            'Brighter and easier to notice',
            'Visible only during daylight',
            'Located on the front of the motorcycle',
            'Less noticeable',
        ],
        correctAnswer: 'Less noticeable',
        explanation:
            'A motorcycle’s single brake light is generally smaller and less noticeable than the multiple brake lights found on a car.',
        source:
            'Illinois Motorcycle Operator Manual — Brake Light, page 20',
    },
    {
        id: 222,
        category: 'brake light',
        question:
            'Why may a motorcycle’s brake light be difficult to notice when its taillight is already illuminated?',
        options: [
            'The change in brightness may not stand out as clearly as it does on a car',
            'Applying the brakes switches off the taillight',
            'The brake light works only at low speeds',
            'Motorcycle brake lights cannot be seen from behind',
        ],
        correctAnswer:
            'The change in brightness may not stand out as clearly as it does on a car',
        explanation:
            'Because the taillight is already illuminated, other drivers may not immediately notice when the brake light becomes brighter.',
        source:
            'Illinois Motorcycle Operator Manual — Brake Light, page 20',
    },
    {
        id: 223,
        category: 'brake light',
        question:
            'When the traffic situation permits, how can a motorcyclist make an upcoming slowdown more noticeable?',
        options: [
            'Turn off the headlight',
            'Move suddenly to another lane',
            'Flash the brake light before slowing',
            'Sound the horn continuously',
        ],
        correctAnswer: 'Flash the brake light before slowing',
        explanation:
            'Briefly activating the brakes before the actual slowdown attracts the attention of drivers behind the motorcycle.',
        source:
            'Illinois Motorcycle Operator Manual — Brake Light, page 20',
    },
    {
        id: 224,
        category: 'brake light',
        question:
            'Before slowing more rapidly than other drivers may expect, what should a motorcyclist do?',
        options: [
            'Move onto the shoulder',
            'Flash the brake light',
            'Turn off the taillight',
            'Shift into neutral',
        ],
        correctAnswer: 'Flash the brake light',
        explanation:
            'Flashing the brake light warns following traffic when the rider plans to reduce speed more rapidly than expected.',
        source:
            'Illinois Motorcycle Operator Manual — Brake Light, page 20',
    },
    {
        id: 225,
        category: 'brake light',
        question:
            'Which situation is an example of slowing more quickly than following drivers might expect?',
        options: [
            'Exiting a high-speed highway',
            'Accelerating onto a freeway',
            'Traveling through an empty intersection',
            'Passing another vehicle',
        ],
        correctAnswer: 'Exiting a high-speed highway',
        explanation:
            'A rider exiting a high-speed highway may need to slow much more rapidly than surrounding traffic expects.',
        source:
            'Illinois Motorcycle Operator Manual — Brake Light, page 20',
    },
    {
        id: 226,
        category: 'brake light',
        question:
            'When should a rider flash the brake light because the location of the slowdown may be unexpected?',
        options: [
            'Only at a marked stop sign',
            'Only at a red traffic signal',
            'Only in a designated parking space',
            'When slowing in the middle of a block or near an alley',
        ],
        correctAnswer:
            'When slowing in the middle of a block or near an alley',
        explanation:
            'Drivers may not expect a motorcycle to slow in these locations, making an advance brake-light warning especially important.',
        source:
            'Illinois Motorcycle Operator Manual — Brake Light, page 20',
    },
    {
        id: 227,
        category: 'brake light',
        question:
            'Why should a rider flash the brake light before slowing when being followed closely?',
        options: [
            'It guarantees that the tailgater will change lanes',
            'It gives the motorcycle additional stopping power',
            'It warns the tailgater about the slowdown and hazards they may not see',
            'It prevents the following vehicle from using its brakes',
        ],
        correctAnswer:
            'It warns the tailgater about the slowdown and hazards they may not see',
        explanation:
            'A close follower may be watching the motorcycle instead of the roadway ahead. Flashing the brake light provides an advance warning.',
        source:
            'Illinois Motorcycle Operator Manual — Brake Light, page 20',
    },
    {
        id: 228,
        category: 'using your mirrors',
        question:
            'Why must a motorcyclist monitor traffic behind them even though scanning ahead is the highest priority?',
        options: [
            'Rear traffic determines the motorcycle’s speed limit',
            'Mirrors provide a better view than looking ahead',
            'Conditions behind can change quickly and affect how the rider handles trouble ahead',
            'Motorcycles are required to remain ahead of all following vehicles',
        ],
        correctAnswer:
            'Conditions behind can change quickly and affect how the rider handles trouble ahead',
        explanation:
            'Knowing what is behind you helps determine whether it is safe to brake, change position, or use an escape route.',
        source:
            'Illinois Motorcycle Operator Manual — Using Your Mirrors, page 20',
    },
    {
        id: 229,
        category: 'using your mirrors',
        question: 'How often should a motorcyclist check their mirrors?',
        options: [
            'Frequently, as part of their normal scanning routine',
            'Only before beginning a ride',
            'Only after another driver sounds a horn',
            'Once every several minutes',
        ],
        correctAnswer:
            'Frequently, as part of their normal scanning routine',
        explanation:
            'Mirror checks should be performed frequently as part of normal scanning, not only when the rider already suspects a problem.',
        source:
            'Illinois Motorcycle Operator Manual — Using Your Mirrors, page 20',
    },
    {
        id: 230,
        category: 'using your mirrors',
        question:
            'Why should a motorcyclist check their mirrors while stopped at an intersection?',
        options: [
            'To determine when the traffic signal will change',
            'To check whether the headlight is operating',
            'To watch pedestrians on the sidewalk',
            'To detect drivers approaching from behind who may not be paying attention',
        ],
        correctAnswer:
            'To detect drivers approaching from behind who may not be paying attention',
        explanation:
            'A distracted driver could approach rapidly and strike a stopped motorcycle before recognizing it.',
        source:
            'Illinois Motorcycle Operator Manual — Using Your Mirrors, page 20',
    },
    {
        id: 231,
        category: 'using your mirrors',
        question:
            'Before changing lanes, why should a motorcyclist check their mirrors?',
        options: [
            'To determine whether the pavement is slippery',
            'To make sure another vehicle is not about to pass',
            'To check the motorcycle’s brake light',
            'To determine whether the speed limit has changed',
        ],
        correctAnswer: 'To make sure another vehicle is not about to pass',
        explanation:
            'Checking behind before changing lanes helps prevent you from entering the path of a vehicle that has already begun passing.',
        source:
            'Illinois Motorcycle Operator Manual — Using Your Mirrors, page 20',
    },
    {
        id: 232,
        category: 'using your mirrors',
        question:
            'Why should a motorcyclist check their mirrors before slowing down?',
        options: [
            'A driver behind may not expect the motorcycle to slow',
            'The mirrors will show whether the front brake is working',
            'The motorcycle cannot slow unless the mirrors are clear',
            'Checking the mirrors activates the brake light',
        ],
        correctAnswer:
            'A driver behind may not expect the motorcycle to slow',
        explanation:
            'Checking the mirrors reveals whether another vehicle is close enough to make your slowdown dangerous.',
        source:
            'Illinois Motorcycle Operator Manual — Using Your Mirrors, page 20',
    },
    {
        id: 233,
        category: 'using your mirrors',
        question:
            'A motorcycle rider signals before slowing to turn into a nearby driveway. What might a following driver incorrectly assume?',
        options: [
            'The rider plans to stop immediately in the roadway',
            'The motorcycle’s signal was activated accidentally',
            'The rider intends to turn at a more distant intersection',
            'The rider intends to accelerate onto a freeway',
        ],
        correctAnswer:
            'The rider intends to turn at a more distant intersection',
        explanation:
            'A following driver may misunderstand where the motorcycle will turn and fail to prepare for the rider’s earlier slowdown.',
        source:
            'Illinois Motorcycle Operator Manual — Using Your Mirrors, page 20',
    },
    {
        id: 234,
        category: 'using your mirrors',
        question:
            'Compared with a flat mirror, what advantage does a rounded convex motorcycle mirror provide?',
        options: [
            'It makes every vehicle appear larger',
            'It eliminates all blind spots',
            'It shows the exact distance to following traffic',
            'It provides a wider view of the roadway behind',
        ],
        correctAnswer: 'It provides a wider view of the roadway behind',
        explanation:
            'Convex mirrors show a wider area than flat mirrors, although they distort the apparent distance of vehicles.',
        source:
            'Illinois Motorcycle Operator Manual — Using Your Mirrors, page 20',
    },
    {
        id: 235,
        category: 'using your mirrors',
        question:
            'How do vehicles generally appear when viewed through a convex motorcycle mirror?',
        options: [
            'Closer than they really are',
            'Farther away than they really are',
            'Larger than they really are',
            'At exactly their actual distance',
        ],
        correctAnswer: 'Farther away than they really are',
        explanation:
            'Objects in convex mirrors appear smaller and farther away, which may cause riders to underestimate how close traffic actually is.',
        source:
            'Illinois Motorcycle Operator Manual — Using Your Mirrors, page 20',
    },
    {
        id: 236,
        category: 'using your mirrors',
        question:
            'How does the manual recommend becoming familiar with the distance distortion of convex mirrors?',
        options: [
            'While stopped, view a parked vehicle in the mirror and then turn around to compare its actual distance',
            'Practice judging distance while traveling at highway speed',
            'Replace the convex mirrors with flat mirrors',
            'Depend on another rider to estimate the distance',
        ],
        correctAnswer:
            'While stopped, view a parked vehicle in the mirror and then turn around to compare its actual distance',
        explanation:
            'Comparing the reflected distance with the vehicle’s actual distance helps you understand how much the convex mirror distorts your view.',
        source:
            'Illinois Motorcycle Operator Manual — Using Your Mirrors, page 20',
    },
    {
        id: 237,
        category: 'using your mirrors',
        question:
            'Even after becoming experienced with motorcycle mirrors, what should a rider do before changing lanes?',
        options: [
            'Accelerate without performing a head check',
            'Depend entirely on the mirrors',
            'Allow additional distance before moving into the other lane',
            'Move as soon as a vehicle disappears from the mirror',
        ],
        correctAnswer:
            'Allow additional distance before moving into the other lane',
        explanation:
            'Even experienced riders can misjudge distance through convex mirrors, so allowing extra room provides additional protection.',
        source:
            'Illinois Motorcycle Operator Manual — Using Your Mirrors, page 20',
    },
    {
        id: 238,
        category: 'head checks',
        question:
            'Why are mirror checks alone insufficient before changing lanes on a motorcycle?',
        options: [
            'Mirrors cannot be used while the motorcycle is moving',
            'Motorcycles have blind spots that may hide other vehicles',
            'Mirrors show only traffic traveling in the opposite direction',
            'Mirrors automatically move during a lane change',
        ],
        correctAnswer:
            'Motorcycles have blind spots that may hide other vehicles',
        explanation:
            'Mirrors cannot show every area beside the motorcycle, making a physical head check necessary before changing lanes.',
        source:
            'Illinois Motorcycle Operator Manual — Head Checks, page 21',
    },
    {
        id: 239,
        category: 'head checks',
        question:
            'Before changing lanes, what should a motorcyclist do in addition to checking the mirrors?',
        options: [
            'Turn their head and look to the side for other vehicles',
            'Apply both brakes and stop',
            'Sound the horn continuously',
            'Turn off the signal',
        ],
        correctAnswer:
            'Turn their head and look to the side for other vehicles',
        explanation:
            'A direct look confirms whether the lane contains a vehicle hidden outside the mirrors’ fields of view.',
        source:
            'Illinois Motorcycle Operator Manual — Head Checks, page 21',
    },
    {
        id: 240,
        category: 'head checks',
        question:
            'On a multilane road, which lanes should a rider visually check before changing lanes?',
        options: [
            'Only the lane directly beside the motorcycle',
            'Only the farthest lane',
            'Only the motorcycle’s current lane',
            'Both the neighboring lane and the farther lane',
        ],
        correctAnswer: 'Both the neighboring lane and the farther lane',
        explanation:
            'Check both the lane you intend to enter and the farther lane before beginning the maneuver.',
        source:
            'Illinois Motorcycle Operator Manual — Head Checks, page 21',
    },
    {
        id: 241,
        category: 'head checks',
        question:
            'Why must a motorcyclist check the farther lane before moving into an adjacent lane?',
        options: [
            'The farther lane always has the right of way',
            'Vehicles in the farther lane are required to accelerate',
            'A driver there may be moving toward the same space the motorcycle intends to occupy',
            'The adjacent lane cannot contain vehicles',
        ],
        correctAnswer:
            'A driver there may be moving toward the same space the motorcycle intends to occupy',
        explanation:
            'The motorcycle and a driver two lanes away could attempt to merge into the same middle lane simultaneously.',
        source:
            'Illinois Motorcycle Operator Manual — Head Checks, page 21',
    },
    {
        id: 242,
        category: 'head checks',
        question: 'How often should motorcyclists perform head checks?',
        options: [
            'Frequently, as part of the normal scanning routine',
            'Only when entering a freeway',
            'Only when mirrors are unavailable',
            'Only before making a left turn',
        ],
        correctAnswer:
            'Frequently, as part of the normal scanning routine',
        explanation:
            'Frequent head checks provide a more complete understanding of the traffic surrounding the motorcycle.',
        source:
            'Illinois Motorcycle Operator Manual — Head Checks, page 21',
    },
    {
        id: 243,
        category: 'head checks',
        question:
            'How do frequent head checks improve a motorcyclist’s safety?',
        options: [
            'They eliminate the need to use mirrors',
            'They help the rider understand surrounding conditions and prepare for changes',
            'They guarantee that other drivers will yield',
            'They prevent vehicles from entering the rider’s blind spots',
        ],
        correctAnswer:
            'They help the rider understand surrounding conditions and prepare for changes',
        explanation:
            'Knowing what is around the motorcycle makes it easier to respond quickly when another road user moves unexpectedly.',
        source:
            'Illinois Motorcycle Operator Manual — Head Checks, page 21',
    },
    {
        id: 244,
        category: 'horn',
        question:
            'What is the primary safety purpose of a motorcycle’s horn?',
        options: [
            'To tell other drivers to increase their speed',
            'To replace the motorcycle’s turn signals',
            'To communicate frustration with other road users',
            'To attract someone’s attention quickly',
        ],
        correctAnswer: 'To attract someone’s attention quickly',
        explanation:
            'The horn provides a quick way to alert someone who may not have noticed the motorcycle.',
        source: 'Illinois Motorcycle Operator Manual — Horn, page 21',
    },
    {
        id: 245,
        category: 'horn',
        question:
            'Before passing someone who might move into your lane, how should you generally use the horn?',
        options: [
            'Give a quick beep to attract their attention',
            'Hold the horn continuously for several minutes',
            'Avoid using it under every circumstance',
            'Use it only after entering their blind spot',
        ],
        correctAnswer: 'Give a quick beep to attract their attention',
        explanation:
            'A short warning before passing may prevent another road user from unexpectedly moving into your lane.',
        source: 'Illinois Motorcycle Operator Manual — Horn, page 21',
    },
    {
        id: 246,
        category: 'horn',
        question:
            'Why might you give a quick horn beep before passing a driver who is following another vehicle too closely?',
        options: [
            'The driver is legally required to stop',
            'The driver may attempt to pass and move into your lane',
            'The horn gives your motorcycle the right of way',
            'The driver’s brakes may not work',
        ],
        correctAnswer:
            'The driver may attempt to pass and move into your lane',
        explanation:
            'A driver following too closely may become impatient and begin changing lanes without noticing the motorcycle.',
        source: 'Illinois Motorcycle Operator Manual — Horn, page 21',
    },
    {
        id: 247,
        category: 'horn',
        question:
            'Why should a rider consider using the horn when approaching a parked car occupied by someone in the driver’s seat?',
        options: [
            'The parked vehicle is required to respond with its horn',
            'The motorcycle must always stop behind parked cars',
            'The driver may pull into the rider’s path',
            'The horn prevents the car door from opening',
        ],
        correctAnswer: 'The driver may pull into the rider’s path',
        explanation:
            'An occupied parked car may suddenly enter traffic. A quick horn beep can alert the driver to the motorcycle’s presence.',
        source: 'Illinois Motorcycle Operator Manual — Horn, page 21',
    },
    {
        id: 248,
        category: 'horn',
        question:
            'When approaching a pedestrian or bicyclist in or near the roadway, why might a motorcyclist use a quick horn beep?',
        options: [
            'To make them move faster',
            'To order them to leave the road',
            'To test whether the motorcycle’s horn works',
            'To alert them to the motorcycle’s presence',
        ],
        correctAnswer: 'To alert them to the motorcycle’s presence',
        explanation:
            'Pedestrians and bicyclists may not notice an approaching motorcycle until it is dangerously close.',
        source: 'Illinois Motorcycle Operator Manual — Horn, page 21',
    },
    {
        id: 249,
        category: 'horn',
        question:
            'How should a rider use the motorcycle’s horn during an immediate emergency?',
        options: [
            'Press the horn loudly and for an extended period',
            'Give one very quiet tap',
            'Avoid the horn and depend only on the headlight',
            'Use the horn only after stopping',
        ],
        correctAnswer: 'Press the horn loudly and for an extended period',
        explanation:
            'A loud and sustained warning is appropriate when immediate danger exists and another road user must be alerted quickly.',
        source: 'Illinois Motorcycle Operator Manual — Horn, page 21',
    },
    {
        id: 250,
        category: 'horn',
        question:
            'What should a rider be prepared to do while using the horn during an emergency?',
        options: [
            'Turn off the headlight',
            'Stop or swerve away from the danger',
            'Remove both hands from the handlebars',
            'Shift into neutral immediately',
        ],
        correctAnswer: 'Stop or swerve away from the danger',
        explanation:
            'The horn may not produce a response, so the rider must remain prepared to physically avoid the hazard.',
        source: 'Illinois Motorcycle Operator Manual — Horn, page 21',
    },
    {
        id: 251,
        category: 'horn',
        question:
            'Why should a motorcyclist not rely exclusively on the horn to avoid a hazard?',
        options: [
            'Motorcycle horns do not function while braking',
            'Horn use is prohibited during emergencies',
            'A motorcycle’s horn is less powerful than a car’s, so other avoidance actions may also be necessary',
            'The horn can only be heard by pedestrians',
        ],
        correctAnswer:
            'A motorcycle’s horn is less powerful than a car’s, so other avoidance actions may also be necessary',
        explanation:
            'Use the horn as a warning, but never assume another road user heard it or will respond correctly. Be prepared to stop or swerve.',
        source: 'Illinois Motorcycle Operator Manual — Horn, page 21',
    },
    {
        id: 252,
        category: 'riding at night',
        question:
            'What makes motorcycle riding especially challenging at night?',
        options: [
            'It is more difficult for the rider to see and for other road users to see the motorcycle',
            'Motorcycle headlights cannot operate after sunset',
            'Motorcycles are required to use the shoulder at night',
            'Turn signals do not work under artificial lighting',
        ],
        correctAnswer:
            'It is more difficult for the rider to see and for other road users to see the motorcycle',
        explanation:
            'Reduced light limits the rider’s view while also making the motorcycle harder for other road users to recognize.',
        source:
            'Illinois Motorcycle Operator Manual — Riding at Night, page 21',
    },
    {
        id: 253,
        category: 'riding at night',
        question:
            'Why may other drivers have difficulty recognizing a motorcycle at night?',
        options: [
            'Motorcycle headlights automatically switch off near cars',
            'The motorcycle’s headlight or taillight may blend with surrounding vehicle lights',
            'Reflective clothing becomes invisible at night',
            'Motorcycles cannot use brake lights after sunset',
        ],
        correctAnswer:
            'The motorcycle’s headlight or taillight may blend with surrounding vehicle lights',
        explanation:
            'Against a background of numerous lights, drivers may fail to distinguish the motorcycle as a separate vehicle.',
        source:
            'Illinois Motorcycle Operator Manual — Riding at Night, page 21',
    },
    {
        id: 254,
        category: 'riding at night',
        question:
            'How should a motorcyclist adjust their speed when riding at night?',
        options: [
            'Ride faster to spend less time in darkness',
            'Maintain exactly the same speed used during daylight',
            'Match the fastest vehicle on the road',
            'Ride more slowly than during daylight, especially on unfamiliar roads',
        ],
        correctAnswer:
            'Ride more slowly than during daylight, especially on unfamiliar roads',
        explanation:
            'Reduced speed gives the rider additional time to recognize and respond to hazards that become visible later at night.',
        source:
            'Illinois Motorcycle Operator Manual — Riding at Night, page 21',
    },
    {
        id: 255,
        category: 'riding at night',
        question: 'Why should a motorcyclist reduce speed at night?',
        options: [
            'The speed limit automatically decreases after sunset',
            'Slower riding eliminates the need for a headlight',
            'It increases the rider’s chance of detecting and avoiding a hazard',
            'Motorcycle brakes become illegal at night',
        ],
        correctAnswer:
            'It increases the rider’s chance of detecting and avoiding a hazard',
        explanation:
            'At a lower speed, the motorcycle covers less distance before the rider reacts and has more room to stop or maneuver.',
        source:
            'Illinois Motorcycle Operator Manual — Riding at Night, page 21',
    },
    {
        id: 256,
        category: 'riding at night',
        question:
            'Why should a motorcyclist increase following distance at night?',
        options: [
            'Distances are more difficult to judge under nighttime lighting',
            'Vehicles always stop more quickly at night',
            'Motorcycles cannot use the front brake after dark',
            'Other drivers are required to travel faster',
        ],
        correctAnswer:
            'Distances are more difficult to judge under nighttime lighting',
        explanation:
            'Because depth and speed are harder to estimate at night, additional following distance compensates for possible misjudgment.',
        source:
            'Illinois Motorcycle Operator Manual — Riding at Night, page 21',
    },
    {
        id: 257,
        category: 'riding at night',
        question:
            'Why is judging distance and speed more difficult at night?',
        options: [
            'Motorcycle mirrors stop reflecting distant objects',
            'Shadows and light contrasts used to judge distance may be missing or distorted',
            'Road markings are removed after sunset',
            'The motorcycle’s speedometer becomes inaccurate',
        ],
        correctAnswer:
            'Shadows and light contrasts used to judge distance may be missing or distorted',
        explanation:
            'Artificial lighting changes the visual information normally used to estimate distance and approaching speed.',
        source:
            'Illinois Motorcycle Operator Manual — Riding at Night, page 21',
    },
    {
        id: 258,
        category: 'riding at night',
        question:
            'Besides increasing following distance, what other space adjustment should a rider make at night?',
        options: [
            'Leave less distance while passing',
            'Ride directly beside other vehicles',
            'Follow the vehicle ahead more closely',
            'Allow more distance when passing or being passed',
        ],
        correctAnswer: 'Allow more distance when passing or being passed',
        explanation:
            'Additional separation compensates for reduced visibility and the difficulty of judging the speed and distance of other vehicles.',
        source:
            'Illinois Motorcycle Operator Manual — Riding at Night, page 21',
    },
    {
        id: 259,
        category: 'riding at night',
        question:
            'How can the headlights of a vehicle ahead help a motorcyclist riding at night?',
        options: [
            'They may illuminate more of the road ahead than the motorcycle’s high beam',
            'They allow the motorcyclist to turn off their own headlight',
            'They guarantee the road is free of hazards',
            'They eliminate the need to reduce speed',
        ],
        correctAnswer:
            'They may illuminate more of the road ahead than the motorcycle’s high beam',
        explanation:
            'The wider and stronger headlights of a vehicle ahead may reveal road conditions beyond the area illuminated by the motorcycle.',
        source:
            'Illinois Motorcycle Operator Manual — Riding at Night, page 21',
    },
    {
        id: 260,
        category: 'riding at night',
        question:
            'What might bouncing taillights on a vehicle ahead indicate to a motorcyclist at night?',
        options: [
            'The vehicle is preparing to turn',
            'The driver is applying the parking brake',
            'Rough or uneven pavement ahead',
            'The vehicle is traveling below the speed limit',
        ],
        correctAnswer: 'Rough or uneven pavement ahead',
        explanation:
            'Taillights moving repeatedly up and down may indicate that the vehicle’s wheels are traveling over bumps or damaged pavement.',
        source:
            'Illinois Motorcycle Operator Manual — Riding at Night, page 21',
    },
    {
        id: 261,
        category: 'riding at night',
        question:
            'When should a motorcyclist generally use the high beam while riding at night?',
        options: [
            'While directly following another vehicle',
            'Whenever they are not following or approaching another vehicle',
            'Only on streets with bright lighting',
            'While facing oncoming traffic',
        ],
        correctAnswer:
            'Whenever they are not following or approaching another vehicle',
        explanation:
            'Use the high beam for maximum visibility when it will not shine directly into another driver’s eyes or mirrors.',
        source:
            'Illinois Motorcycle Operator Manual — Riding at Night, page 21',
    },
    {
        id: 262,
        category: 'riding at night',
        question:
            'How should a motorcyclist select a lane position at night?',
        options: [
            'Always remain in the left portion',
            'Always remain in the center portion',
            'Always remain in the right portion',
            'Use whichever portion best improves visibility, space, and the ability to be seen',
        ],
        correctAnswer:
            'Use whichever portion best improves visibility, space, and the ability to be seen',
        explanation:
            'There is no permanent best nighttime position. Change position as road, lighting, and traffic conditions change.',
        source:
            'Illinois Motorcycle Operator Manual — Riding at Night, page 21',
    },
    {
        id: 263,
        category: 'riding at night',
        question:
            'What type of clothing should a motorcyclist wear to improve visibility at night?',
        options: [
            'Clothing with reflective material',
            'Completely black clothing',
            'Clothing matching the pavement',
            'Dark clothing without reflective surfaces',
        ],
        correctAnswer: 'Clothing with reflective material',
        explanation:
            'Reflective material returns light toward approaching drivers, greatly improving the rider’s visibility at night.',
        source:
            'Illinois Motorcycle Operator Manual — Riding at Night, page 21',
    },
    {
        id: 264,
        category: 'general crash avoidance',
        question:
            'What most affects a motorcyclist’s chance of safely escaping a sudden dangerous situation?',
        options: [
            'The motorcycle’s maximum speed',
            'The rider’s ability to react quickly and correctly',
            'The motorcycle’s color',
            'The number of vehicles nearby',
        ],
        correctAnswer: 'The rider’s ability to react quickly and correctly',
        explanation:
            'When danger develops, safely escaping depends on recognizing it and performing the appropriate maneuver without hesitation.',
        source:
            'Illinois Motorcycle Operator Manual — Crash Avoidance, page 22',
    },
    {
        id: 265,
        category: 'general crash avoidance',
        question:
            'According to the Illinois motorcycle manual, why do many crashes occur during sudden dangerous situations?',
        options: [
            'Motorcycle headlights are not bright enough',
            'Riders use the front brake too frequently',
            'Motorcycles cannot swerve around obstacles',
            'Riders are not prepared to perform crash-avoidance maneuvers',
        ],
        correctAnswer:
            'Riders are not prepared to perform crash-avoidance maneuvers',
        explanation:
            'A rider may understand ordinary controls but still crash because they have not prepared for emergency braking or swerving.',
        source:
            'Illinois Motorcycle Operator Manual — Crash Avoidance, page 22',
    },
    {
        id: 266,
        category: 'general crash avoidance',
        question:
            'Which two skills are especially important when attempting to avoid a motorcycle crash?',
        options: [
            'Knowing when and how to stop or swerve',
            'Signaling and changing gears simultaneously',
            'Accelerating and sounding the horn',
            'Looking backward and shifting into neutral',
        ],
        correctAnswer: 'Knowing when and how to stop or swerve',
        explanation:
            'Some hazards should be avoided by stopping, while others require a swerve. Riders must recognize which maneuver fits the available space.',
        source:
            'Illinois Motorcycle Operator Manual — Crash Avoidance, page 22',
    },
    {
        id: 267,
        category: 'general crash avoidance',
        question:
            'What braking mistake is common among riders involved in crashes?',
        options: [
            'Overusing both brakes equally',
            'Using only engine braking',
            'Under-braking the front tire and over-braking the rear tire',
            'Applying the front brake progressively',
        ],
        correctAnswer:
            'Under-braking the front tire and over-braking the rear tire',
        explanation:
            'Many riders fail to use the front brake’s substantial stopping power while applying excessive pressure to the rear brake.',
        source:
            'Illinois Motorcycle Operator Manual — Crash Avoidance, page 22',
    },
    {
        id: 268,
        category: 'general crash avoidance',
        question:
            'What mistake involving braking and swerving is common among crash-involved motorcyclists?',
        options: [
            'They always swerved when stopping was safer',
            'They failed to separate braking from swerving or failed to swerve when appropriate',
            'They used the horn before swerving',
            'They leaned the motorcycle while keeping their body upright',
        ],
        correctAnswer:
            'They failed to separate braking from swerving or failed to swerve when appropriate',
        explanation:
            'Braking and swerving use traction differently. Combining them can cause a loss of control, but failing to swerve when needed can also cause a crash.',
        source:
            'Illinois Motorcycle Operator Manual — Crash Avoidance, page 22',
    },
    {
        id: 269,
        category: 'quick stops',
        question:
            'To stop a motorcycle quickly in a straight line, how should the brakes be applied?',
        options: [
            'Apply only the rear brake',
            'Apply the front brake first and wait before using the rear',
            'Alternate between the front and rear brakes',
            'Apply both brakes at the same time',
        ],
        correctAnswer: 'Apply both brakes at the same time',
        explanation:
            'Applying both brakes simultaneously produces the shortest controlled stopping distance.',
        source:
            'Illinois Motorcycle Operator Manual — Quick Stops, page 22',
    },
    {
        id: 270,
        category: 'quick stops',
        question:
            'During a quick stop, how should the front brake lever be operated?',
        options: [
            'Squeeze it firmly and progressively without grabbing it',
            'Grab it suddenly with maximum force',
            'Pump it rapidly',
            'Avoid using it until the rear brake is fully applied',
        ],
        correctAnswer:
            'Squeeze it firmly and progressively without grabbing it',
        explanation:
            'Progressive pressure allows the front tire to maintain traction while its available stopping force increases.',
        source:
            'Illinois Motorcycle Operator Manual — Quick Stops, page 22',
    },
    {
        id: 271,
        category: 'quick stops',
        question:
            'What should you do if the front wheel locks during a quick stop?',
        options: [
            'Keep the front brake locked until the motorcycle stops',
            'Release both brakes completely',
            'Release the front brake immediately and then reapply it firmly',
            'Accelerate to restore traction',
        ],
        correctAnswer:
            'Release the front brake immediately and then reapply it firmly',
        explanation:
            'Releasing the front brake allows the wheel to rotate and regain traction. The brake should then be reapplied firmly and progressively.',
        source:
            'Illinois Motorcycle Operator Manual — Quick Stops, page 22',
    },
    {
        id: 272,
        category: 'quick stops',
        question:
            'If the rear wheel accidentally locks on a surface with good traction during a straight quick stop, what should you do?',
        options: [
            'Release it immediately and steer sharply',
            'Keep it locked until the motorcycle has completely stopped',
            'Accelerate while maintaining rear-brake pressure',
            'Release the front brake and use only the rear',
        ],
        correctAnswer:
            'Keep it locked until the motorcycle has completely stopped',
        explanation:
            'According to the manual, keep a rear wheel locked until stopping during a straight quick stop to avoid a sudden sideways snap when traction returns.',
        source:
            'Illinois Motorcycle Operator Manual — Quick Stops, page 22',
    },
    {
        id: 273,
        category: 'quick stops',
        question:
            'Under which conditions can a rider maintain control with a locked rear wheel during a quick stop?',
        options: [
            'While the motorcycle is leaning through a curve',
            'While swerving around an obstacle',
            'While the handlebars are sharply turned',
            'While the motorcycle is upright and traveling in a straight line',
        ],
        correctAnswer:
            'While the motorcycle is upright and traveling in a straight line',
        explanation:
            'A locked rear wheel may remain controllable when the motorcycle is upright and moving straight. Leaning or turning makes control more difficult.',
        source:
            'Illinois Motorcycle Operator Manual — Quick Stops, page 22',
    },
    {
        id: 274,
        category: 'quick stops',
        question:
            'Approximately how much of a motorcycle’s potential stopping power can the front brake provide?',
        options: [
            'Seventy percent or more',
            'Approximately twenty percent',
            'Less than half',
            'Exactly fifty percent',
        ],
        correctAnswer: 'Seventy percent or more',
        explanation:
            'Weight transfers toward the front wheel during braking, allowing the front brake to provide approximately 70% or more of the stopping power.',
        source:
            'Illinois Motorcycle Operator Manual — Quick Stops, page 22',
    },
    {
        id: 275,
        category: 'quick stops',
        question:
            'If you must make a quick stop while traveling through a curve, what is the best technique when space permits?',
        options: [
            'Apply maximum brake pressure while remaining fully leaned',
            'Use only the rear brake',
            'Straighten the motorcycle upright and then apply the brakes',
            'Accelerate until leaving the curve',
        ],
        correctAnswer:
            'Straighten the motorcycle upright and then apply the brakes',
        explanation:
            'An upright motorcycle has more traction available for braking because its tires are no longer using as much grip for cornering.',
        source:
            'Illinois Motorcycle Operator Manual — Quick Stops, page 22',
    },
    {
        id: 276,
        category: 'quick stops',
        question:
            'If you must brake while the motorcycle is still leaning, what should you do initially?',
        options: [
            'Apply maximum front-brake pressure',
            'Apply light brake pressure and reduce the throttle',
            'Lock the rear wheel',
            'Increase the lean angle',
        ],
        correctAnswer: 'Apply light brake pressure and reduce the throttle',
        explanation:
            'If straightening first is impossible, begin braking gently and reduce the throttle. Heavy braking while leaned may exceed available traction.',
        source:
            'Illinois Motorcycle Operator Manual — Quick Stops, page 22',
    },
    {
        id: 277,
        category: 'quick stops',
        question:
            'While braking in a curve, how should brake pressure change as the motorcycle slows?',
        options: [
            'Brake pressure should remain very light until the motorcycle stops',
            'Brake pressure should decrease as the motorcycle becomes straighter',
            'Only the rear brake should be used after reducing the lean',
            'Reduce the lean angle and gradually apply more brake pressure',
        ],
        correctAnswer:
            'Reduce the lean angle and gradually apply more brake pressure',
        explanation:
            'As the motorcycle becomes more upright, more traction becomes available for braking, allowing progressively greater pressure.',
        source:
            'Illinois Motorcycle Operator Manual — Quick Stops, page 22',
    },
    {
        id: 278,
        category: 'quick stops',
        question:
            'When can maximum brake pressure be safely applied during a stop that began in a curve?',
        options: [
            'Once the motorcycle is straight',
            'While the motorcycle is at its greatest lean angle',
            'Before reducing the throttle',
            'While the rider’s body is leaning farther than the motorcycle',
        ],
        correctAnswer: 'Once the motorcycle is straight',
        explanation:
            'Maximum braking is safest when the motorcycle is upright and the tires are no longer using significant traction for turning.',
        source:
            'Illinois Motorcycle Operator Manual — Quick Stops, page 22',
    },
    {
        id: 279,
        category: 'quick stops',
        question:
            'What should you do with the handlebars during the final few feet of a quick stop?',
        options: [
            'Turn them sharply toward an escape route',
            'Keep them angled in the direction of the curve',
            'Straighten them',
            'Release both handlebars',
        ],
        correctAnswer: 'Straighten them',
        explanation:
            'Straight handlebars during the final few feet help keep the motorcycle upright and balanced as it stops.',
        source:
            'Illinois Motorcycle Operator Manual — Quick Stops, page 22',
    },
    {
        id: 280,
        category: 'quick stops',
        question:
            'What should the motorcycle’s position be as a quick stop is completed?',
        options: [
            'Leaned to the left with one foot dragging',
            'Upright, straight, and balanced',
            'Leaned toward the roadway shoulder',
            'Turned sharply away from traffic',
        ],
        correctAnswer: 'Upright, straight, and balanced',
        explanation:
            'Completing the stop upright, straight, and balanced reduces the chance of losing balance or dropping the motorcycle.',
        source:
            'Illinois Motorcycle Operator Manual — Quick Stops, page 22',
    },
    {
        id: 281,
        category: 'swerving or turning quickly',
        question:
            'When might swerving be necessary instead of attempting to stop?',
        options: [
            'Whenever the rider approaches an ordinary curve',
            'Only when traveling below 10 mph',
            'Whenever the rear brake stops working',
            'When an obstacle appears suddenly and there is not enough room to stop',
        ],
        correctAnswer:
            'When an obstacle appears suddenly and there is not enough room to stop',
        explanation:
            'If the available stopping distance is insufficient, quickly changing direction may be the only way to avoid the obstacle.',
        source:
            'Illinois Motorcycle Operator Manual — Swerving or Turning Quickly, page 23',
    },
    {
        id: 282,
        category: 'swerving or turning quickly',
        question: 'What is a motorcycle swerve?',
        options: [
            'A sudden change in direction',
            'A gradual lane change using a turn signal',
            'A quick stop using both brakes',
            'A controlled rear-wheel skid',
        ],
        correctAnswer: 'A sudden change in direction',
        explanation:
            'A swerve rapidly moves the motorcycle away from its current path without first bringing it to a stop.',
        source:
            'Illinois Motorcycle Operator Manual — Swerving or Turning Quickly, page 23',
    },
    {
        id: 283,
        category: 'swerving or turning quickly',
        question: 'Which action may be considered a swerve?',
        options: [
            'Gradually moving across several lanes',
            'Stopping before reaching an obstacle',
            'Making two quick turns or rapidly shifting to the side',
            'Slowly leaning through a constant curve',
        ],
        correctAnswer:
            'Making two quick turns or rapidly shifting to the side',
        explanation:
            'A swerve usually consists of a quick movement away from a hazard followed by another movement back toward the original direction.',
        source:
            'Illinois Motorcycle Operator Manual — Swerving or Turning Quickly, page 23',
    },
    {
        id: 284,
        category: 'swerving or turning quickly',
        question:
            'To begin a swerve, where should a rider apply hand pressure?',
        options: [
            'To both handlegrips with equal force',
            'To the handlegrip on the side of the intended escape direction',
            'To the handlegrip opposite the intended direction',
            'To the rear brake pedal',
        ],
        correctAnswer:
            'To the handlegrip on the side of the intended escape direction',
        explanation:
            'Press the handlegrip in the intended direction of travel: press left to move left or press right to move right.',
        source:
            'Illinois Motorcycle Operator Manual — Swerving or Turning Quickly, page 23',
    },
    {
        id: 285,
        category: 'swerving or turning quickly',
        question:
            'How does the sharpness of a swerve affect the motorcycle’s required lean?',
        options: [
            'A sharper swerve requires less lean',
            'Lean angle does not affect a swerve',
            'A sharp swerve requires the motorcycle to remain upright',
            'A sharper swerve requires more lean',
        ],
        correctAnswer: 'A sharper swerve requires more lean',
        explanation:
            'A faster or more dramatic directional change requires the motorcycle to lean farther.',
        source:
            'Illinois Motorcycle Operator Manual — Swerving or Turning Quickly, page 23',
    },
    {
        id: 286,
        category: 'swerving or turning quickly',
        question: 'What body position should a rider use while swerving?',
        options: [
            'Keep the body upright, allow the motorcycle to lean, keep the knees against the tank, and maintain both feet on the pegs',
            'Lean the body farther than the motorcycle',
            'Drag one foot for balance',
            'Straighten both arms and move the knees away from the tank',
        ],
        correctAnswer:
            'Keep the body upright, allow the motorcycle to lean, keep the knees against the tank, and maintain both feet on the pegs',
        explanation:
            'This counterbalanced position lets the motorcycle change direction quickly underneath the rider while preserving body stability.',
        source:
            'Illinois Motorcycle Operator Manual — Swerving or Turning Quickly, page 23',
    },
    {
        id: 287,
        category: 'swerving or turning quickly',
        question:
            'Where should a rider look while performing an emergency swerve?',
        options: [
            'Directly at the obstacle',
            'At the motorcycle’s front wheel',
            'Toward the intended escape route',
            'Behind the motorcycle',
        ],
        correctAnswer: 'Toward the intended escape route',
        explanation:
            'Looking toward the safe opening helps guide the motorcycle around the obstacle instead of toward it.',
        source:
            'Illinois Motorcycle Operator Manual — Swerving or Turning Quickly, page 23',
    },
    {
        id: 288,
        category: 'swerving or turning quickly',
        question:
            'After clearing an obstacle during a swerve, how should the rider return to the original direction of travel?',
        options: [
            'Apply the rear brake while maintaining the same lean',
            'Press the opposite handlegrip',
            'Turn the handlebars sharply without leaning',
            'Accelerate while looking at the obstacle',
        ],
        correctAnswer: 'Press the opposite handlegrip',
        explanation:
            'After clearing the obstacle, pressing the opposite handlegrip makes the motorcycle lean back toward its original direction.',
        source:
            'Illinois Motorcycle Operator Manual — Swerving or Turning Quickly, page 23',
    },
    {
        id: 289,
        category: 'swerving or turning quickly',
        question:
            'Which handlegrip sequence correctly produces and recovers from a swerve to the left?',
        options: [
            'Press right, then press left',
            'Pull left, then pull right',
            'Press both handlegrips simultaneously',
            'Press left to swerve, then press right to recover',
        ],
        correctAnswer:
            'Press left to swerve, then press right to recover',
        explanation:
            'Pressing left produces the initial leftward swerve. Pressing right afterward returns the motorcycle toward its original path.',
        source:
            'Illinois Motorcycle Operator Manual — Swerving or Turning Quickly, page 23',
    },
    {
        id: 290,
        category: 'swerving or turning quickly',
        question:
            'If braking is required during an emergency maneuver involving a swerve, when should braking occur?',
        options: [
            'Before or after the swerve, but never while swerving',
            'Only while the motorcycle is changing direction',
            'At the sharpest point of the swerve',
            'Continuously throughout the entire maneuver',
        ],
        correctAnswer:
            'Before or after the swerve, but never while swerving',
        explanation:
            'Swerving uses traction for a rapid directional change. Braking at the same time may demand more traction than the tires can provide.',
        source:
            'Illinois Motorcycle Operator Manual — Swerving or Turning Quickly, page 23',
    },
    {
        id: 291,
        category: 'cornering',
        question:
            'What is a primary cause of single-vehicle motorcycle crashes in curves?',
        options: [
            'Riders using both brakes before the curve',
            'Riders looking toward the curve’s exit',
            'Riders running wide and striking the roadway edge or a fixed object',
            'Riders changing lane position before entering the curve',
        ],
        correctAnswer:
            'Riders running wide and striking the roadway edge or a fixed object',
        explanation:
            'Excessive entry speed or poor path selection can carry a rider outside the intended lane or completely off the road.',
        source:
            'Illinois Motorcycle Operator Manual — Cornering, page 23',
    },
    {
        id: 292,
        category: 'cornering',
        question: 'Why must a rider evaluate every curve individually?',
        options: [
            'Every curve requires the motorcycle to stop',
            'A curve may remain constant, widen, tighten, or contain multiple turns',
            'All curves have different speed-limit signs',
            'Motorcycles cannot lean equally on different roads',
        ],
        correctAnswer:
            'A curve may remain constant, widen, tighten, or contain multiple turns',
        explanation:
            'Each curve’s shape affects the appropriate speed, path, and amount of motorcycle lean required.',
        source:
            'Illinois Motorcycle Operator Manual — Cornering, page 23',
    },
    {
        id: 293,
        category: 'cornering',
        question:
            'How should a motorcyclist select their speed when approaching and traveling through a curve?',
        options: [
            'Match the fastest surrounding vehicle',
            'Exceed the posted limit to reduce time in the curve',
            'Use the motorcycle’s maximum safe speed',
            'Remain within their riding ability and the posted speed limit',
        ],
        correctAnswer:
            'Remain within their riding ability and the posted speed limit',
        explanation:
            'A rider must choose a speed they can safely control while also obeying the roadway’s posted speed limit.',
        source:
            'Illinois Motorcycle Operator Manual — Cornering, page 23',
    },
    {
        id: 294,
        category: 'cornering',
        question:
            'Which statement about choosing a path through a curve is correct?',
        options: [
            'The safest path may not always exactly follow the curve of the road',
            'The rider must always stay in the center path',
            'The rider must always begin on the inside of the curve',
            'Lane position should never change during a curve',
        ],
        correctAnswer:
            'The safest path may not always exactly follow the curve of the road',
        explanation:
            'Traffic, debris, visibility, and changing curve geometry may require the rider to adjust position within the lane.',
        source:
            'Illinois Motorcycle Operator Manual — Cornering, page 23',
    },
    {
        id: 295,
        category: 'cornering',
        question:
            'What factors should determine a motorcycle’s lane position while cornering?',
        options: [
            'The motorcycle’s color and engine size',
            'The rider’s preferred side of the lane',
            'Traffic, roadway conditions, and the shape of the curve',
            'The position used during the previous curve',
        ],
        correctAnswer:
            'Traffic, roadway conditions, and the shape of the curve',
        explanation:
            'Lane position should respond to the actual traffic, road surface, visibility, and shape of the curve.',
        source:
            'Illinois Motorcycle Operator Manual — Cornering, page 23',
    },
    {
        id: 296,
        category: 'cornering',
        question:
            'When no conflicting traffic is present, what path can improve sight distance and increase the effective radius through a curve?',
        options: [
            'Begin inside, move outside, and finish in the center',
            'Begin outside, move toward the inside, and return outside after passing the center',
            'Remain along the inside edge throughout the curve',
            'Cross the centerline to widen the turn',
        ],
        correctAnswer:
            'Begin outside, move toward the inside, and return outside after passing the center',
        explanation:
            'Beginning outside improves the view and creates a wider effective turning radius before the rider approaches the inside and exits toward the outside.',
        source:
            'Illinois Motorcycle Operator Manual — Cornering, page 23',
    },
    {
        id: 297,
        category: 'cornering',
        question:
            'What is an advantage of entering a curve in the center of your lane and remaining there until the exit?',
        options: [
            'It guarantees that no oncoming traffic will appear',
            'It allows the rider to exceed the posted speed limit',
            'It removes the need to adjust for roadway debris',
            'It can reveal approaching traffic earlier and provide room to adjust for traffic or debris',
        ],
        correctAnswer:
            'It can reveal approaching traffic earlier and provide room to adjust for traffic or debris',
        explanation:
            'Remaining centered can reveal approaching traffic sooner and provide space to adjust when oncoming vehicles crowd the centerline or debris blocks part of the lane.',
        source:
            'Illinois Motorcycle Operator Manual — Cornering, page 23',
    },
    {
        id: 298,
        category: 'uneven surfaces and obstacles',
        question:
            'What happens to a motorcyclist’s risk when riding across uneven, slippery, grooved, or grated surfaces?',
        options: [
            'The risk remains unchanged',
            'The risk decreases at higher speeds',
            'The chance of falling or crashing increases',
            'The motorcycle gains additional traction',
        ],
        correctAnswer: 'The chance of falling or crashing increases',
        explanation:
            'Uneven, slippery, grooved, or grated surfaces reduce stability or traction, increasing the possibility of losing control.',
        source:
            'Illinois Motorcycle Operator Manual — Uneven Surfaces and Obstacles, page 25',
    },
    {
        id: 299,
        category: 'uneven surfaces and obstacles',
        question:
            'Which group contains examples of uneven surfaces or roadway obstacles?',
        options: [
            'Bumps, broken pavement, potholes, and roadway debris',
            'Traffic lights, crosswalks, and lane arrows',
            'Dry asphalt and clean concrete',
            'Road signs and highway exits',
        ],
        correctAnswer:
            'Bumps, broken pavement, potholes, and roadway debris',
        explanation:
            'These hazards can upset the suspension, damage the motorcycle’s wheels, or force it away from its intended path.',
        source:
            'Illinois Motorcycle Operator Manual — Uneven Surfaces and Obstacles, page 25',
    },
    {
        id: 300,
        category: 'uneven surfaces and obstacles',
        question:
            'What is generally the safest way to handle an obstacle in your motorcycle’s path?',
        options: [
            'Accelerate before reaching it',
            'Ride directly over it without changing speed',
            'Apply the brakes while making contact with it',
            'Slow down or travel around it when possible',
        ],
        correctAnswer: 'Slow down or travel around it when possible',
        explanation:
            'Avoiding the obstacle entirely is normally safest. If it cannot be avoided, reduce your speed before crossing it.',
        source:
            'Illinois Motorcycle Operator Manual — Uneven Surfaces and Obstacles, page 25',
    },
    {
        id: 301,
        category: 'uneven surfaces and obstacles',
        question:
            'Before attempting to ride over an unavoidable obstacle, what should the rider determine?',
        options: [
            'Whether another rider has crossed it',
            'Whether crossing the obstacle is actually possible',
            'Whether the motorcycle’s horn works',
            'Whether the obstacle belongs to the state',
        ],
        correctAnswer: 'Whether crossing the obstacle is actually possible',
        explanation:
            'Before committing to the maneuver, determine whether the motorcycle can safely travel over the obstacle.',
        source:
            'Illinois Motorcycle Operator Manual — Uneven Surfaces and Obstacles, page 25',
    },
    {
        id: 302,
        category: 'uneven surfaces and obstacles',
        question:
            'At approximately what angle should a motorcycle approach an obstacle that must be crossed?',
        options: [
            '15 degrees',
            '30 degrees',
            'As close to 90 degrees as possible',
            'Parallel to the obstacle',
        ],
        correctAnswer: 'As close to 90 degrees as possible',
        explanation:
            'A near-perpendicular approach reduces the chance that a tire will slide sideways along the obstacle.',
        source:
            'Illinois Motorcycle Operator Manual — Uneven Surfaces and Obstacles, page 25',
    },
    {
        id: 303,
        category: 'uneven surfaces and obstacles',
        question:
            'Where should a rider look while approaching and crossing an unavoidable obstacle?',
        options: [
            'Toward the intended path of travel',
            'Directly down at the front wheel',
            'At the obstacle’s closest edge',
            'Behind the motorcycle',
        ],
        correctAnswer: 'Toward the intended path of travel',
        explanation:
            'Looking where you want to travel helps guide the motorcycle along the chosen path instead of toward the obstacle.',
        source:
            'Illinois Motorcycle Operator Manual — Uneven Surfaces and Obstacles, page 25',
    },
    {
        id: 304,
        category: 'uneven surfaces and obstacles',
        question:
            'When should a motorcyclist reduce speed for an unavoidable obstacle?',
        options: [
            'Immediately after crossing it',
            'At the exact moment the front wheel contacts it',
            'Only after the rear wheel crosses it',
            'As much as possible before making contact',
        ],
        correctAnswer: 'As much as possible before making contact',
        explanation:
            'Reducing speed beforehand lowers the force of impact and avoids abrupt braking while crossing the obstacle.',
        source:
            'Illinois Motorcycle Operator Manual — Uneven Surfaces and Obstacles, page 25',
    },
    {
        id: 305,
        category: 'uneven surfaces and obstacles',
        question:
            'What position should the motorcycle be in when crossing an unavoidable obstacle?',
        options: [
            'Leaned sharply to the left',
            'Straight',
            'Leaned sharply to the right',
            'Turning across the obstacle',
        ],
        correctAnswer: 'Straight',
        explanation:
            'A straight and upright motorcycle is more stable and better able to absorb the impact.',
        source:
            'Illinois Motorcycle Operator Manual — Uneven Surfaces and Obstacles, page 25',
    },
    {
        id: 306,
        category: 'uneven surfaces and obstacles',
        question:
            'Why should a rider rise slightly off the motorcycle’s seat while crossing an obstacle?',
        options: [
            'To make the motorcycle more visible',
            'To place all body weight on the handlebars',
            'To absorb the impact through the knees and elbows and avoid being thrown off',
            'To increase rear-brake pressure',
        ],
        correctAnswer:
            'To absorb the impact through the knees and elbows and avoid being thrown off',
        explanation:
            'Rising slightly allows your knees and elbows to absorb the shock instead of transferring the entire impact into your body.',
        source:
            'Illinois Motorcycle Operator Manual — Uneven Surfaces and Obstacles, page 25',
    },
    {
        id: 307,
        category: 'uneven surfaces and obstacles',
        question:
            'What should a rider do with the throttle immediately before contacting an unavoidable obstacle?',
        options: [
            'Roll it on slightly to lighten the motorcycle’s front end',
            'Close it completely and shift into neutral',
            'Open it fully to jump over the obstacle',
            'Rapidly alternate between opening and closing it',
        ],
        correctAnswer:
            'Roll it on slightly to lighten the motorcycle’s front end',
        explanation:
            'A small amount of throttle immediately before contact reduces the load on the front wheel and helps it travel over the obstacle.',
        source:
            'Illinois Motorcycle Operator Manual — Uneven Surfaces and Obstacles, page 25',
    },
    {
        id: 308,
        category: 'uneven surfaces and obstacles',
        question:
            'After riding over an object in the roadway, what should the rider do before continuing?',
        options: [
            'Accelerate to check the motorcycle’s balance',
            'Check only the rearview mirrors',
            'Apply the brakes repeatedly',
            'Pull off the road and inspect the tires and rims for damage',
        ],
        correctAnswer:
            'Pull off the road and inspect the tires and rims for damage',
        explanation:
            'An impact can bend a rim or damage a tire even when the motorcycle initially appears to handle normally.',
        source:
            'Illinois Motorcycle Operator Manual — Uneven Surfaces and Obstacles, page 25',
    },
    {
        id: 309,
        category: 'slippery surfaces',
        question:
            'Which surfaces commonly provide poor traction for motorcycles?',
        options: [
            'Clean, dry pavement only',
            'Wet pavement, gravel, mud, snow, ice, and wet metal surfaces',
            'Newly painted buildings',
            'Dry highways without debris',
        ],
        correctAnswer:
            'Wet pavement, gravel, mud, snow, ice, and wet metal surfaces',
        explanation:
            'These surfaces provide less traction than clean, dry pavement, making skids and falls more likely.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 25',
    },
    {
        id: 310,
        category: 'slippery surfaces',
        question:
            'Why can pavement be especially slippery immediately after rain begins?',
        options: [
            'Rain causes the pavement to freeze immediately',
            'Motorcycles lose all braking ability in rain',
            'Surface oil has not yet washed toward the side of the roadway',
            'The rain removes all texture from the pavement',
        ],
        correctAnswer:
            'Surface oil has not yet washed toward the side of the roadway',
        explanation:
            'The first rain mixes with accumulated oil and dirt, creating a slippery surface until the material begins washing away.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 25',
    },
    {
        id: 311,
        category: 'slippery surfaces',
        question:
            'Which roadway features can become especially slippery when wet?',
        options: [
            'Lane markings, steel plates, and utility-hole covers',
            'Traffic signs and streetlights',
            'Concrete barriers and guardrails',
            'Highway exit signs',
        ],
        correctAnswer:
            'Lane markings, steel plates, and utility-hole covers',
        explanation:
            'Painted roadway markings and metal surfaces can become extremely slippery when wet.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 25',
    },
    {
        id: 312,
        category: 'slippery surfaces',
        question:
            'When should a motorcyclist reduce speed for an approaching slippery surface?',
        options: [
            'After completely crossing it',
            'While braking sharply on the surface',
            'Only if the rear wheel begins to skid',
            'Before reaching the slippery surface',
        ],
        correctAnswer: 'Before reaching the slippery surface',
        explanation:
            'Slowing beforehand prevents an abrupt speed change while the tires already have reduced traction.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 25',
    },
    {
        id: 313,
        category: 'slippery surfaces',
        question:
            'Why should a motorcyclist increase stopping distance on a slippery surface?',
        options: [
            'The motorcycle’s engine becomes less powerful',
            'Reduced traction requires more distance to stop safely',
            'The speed limit automatically increases',
            'The front brake cannot be used',
        ],
        correctAnswer:
            'Reduced traction requires more distance to stop safely',
        explanation:
            'The tires cannot produce the same braking force on a slippery surface, so the motorcycle requires more distance to stop.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 25',
    },
    {
        id: 314,
        category: 'slippery surfaces',
        question:
            'When is reducing speed before reaching a slippery surface especially important?',
        options: [
            'Before entering a dry, straight roadway',
            'After exiting a curve',
            'Before entering a wet curve',
            'While stopped at an intersection',
        ],
        correctAnswer: 'Before entering a wet curve',
        explanation:
            'Cornering already uses some tire traction. Reducing speed before a wet curve leaves more available grip for turning.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 25',
    },
    {
        id: 315,
        category: 'slippery surfaces',
        question:
            'Why should a motorcyclist avoid sudden speed or direction changes on a slippery surface?',
        options: [
            'Sudden movements can cause a skid',
            'Sudden movements turn off the headlight',
            'The clutch cannot operate on wet pavement',
            'The motorcycle will automatically enter neutral',
        ],
        correctAnswer: 'Sudden movements can cause a skid',
        explanation:
            'Abrupt acceleration, braking, steering, or shifting can exceed the limited amount of traction available.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 25',
    },
    {
        id: 316,
        category: 'slippery surfaces',
        question:
            'Which actions should be performed as smoothly as possible on a slippery surface?',
        options: [
            'Using the horn and checking mirrors',
            'Looking ahead and checking blind spots',
            'Starting the engine and adjusting the mirrors',
            'Accelerating, shifting, turning, and braking',
        ],
        correctAnswer: 'Accelerating, shifting, turning, and braking',
        explanation:
            'Every control input should be gradual and smooth whenever available traction is limited.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 25',
    },
    {
        id: 317,
        category: 'slippery surfaces',
        question:
            'How should a rider normally brake on a slippery surface?',
        options: [
            'Use only the rear brake',
            'Use both brakes because the front brake remains effective',
            'Avoid both brakes entirely',
            'Use only the front brake',
        ],
        correctAnswer:
            'Use both brakes because the front brake remains effective',
        explanation:
            'The front brake can still provide substantial stopping power on a slippery surface when it is applied carefully.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 25',
    },
    {
        id: 318,
        category: 'slippery surfaces',
        question:
            'How should the front and rear brakes be applied on a slippery surface?',
        options: [
            'Grab the front brake and ignore the rear',
            'Jam the rear brake while releasing the front',
            'Squeeze the front gradually and use gentle pressure on the rear',
            'Apply maximum pressure to both immediately',
        ],
        correctAnswer:
            'Squeeze the front gradually and use gentle pressure on the rear',
        explanation:
            'Progressive front-brake pressure and gentle rear-brake pressure reduce the possibility of locking either wheel.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 25',
    },
    {
        id: 319,
        category: 'slippery surfaces',
        question:
            'When rain begins, where should a motorcyclist generally ride to avoid the oily center portion of the lane?',
        options: [
            'In the tire tracks left by automobiles',
            'Directly over the center oil strip',
            'On the roadway shoulder',
            'Along the edge of the curb',
        ],
        correctAnswer: 'In the tire tracks left by automobiles',
        explanation:
            'Automobile tire tracks generally contain less accumulated oil than the center of the lane when rain first begins.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 26',
    },
    {
        id: 320,
        category: 'slippery surfaces',
        question:
            'Which tire track is often the best lane position when rain begins?',
        options: [
            'The right tire track in every situation',
            'The center between both tire tracks',
            'The roadway shoulder',
            'The left tire track, depending on traffic and roadway conditions',
        ],
        correctAnswer:
            'The left tire track, depending on traffic and roadway conditions',
        explanation:
            'The left tire track is often best, but the rider must still consider surrounding traffic, hazards, and roadway conditions.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 26',
    },
    {
        id: 321,
        category: 'slippery surfaces',
        question:
            'Why should a rider watch for oil spots when stopping or parking?',
        options: [
            'Oil prevents the motorcycle’s engine from stopping',
            'The rider’s foot may slip when placed on the ground',
            'Oil automatically locks the brakes',
            'The motorcycle’s tires may immediately deflate',
        ],
        correctAnswer: 'The rider’s foot may slip when placed on the ground',
        explanation:
            'An oil spot can cause the rider’s supporting foot to slide, making it easy to lose balance and drop the motorcycle.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 26',
    },
    {
        id: 322,
        category: 'slippery surfaces',
        question: 'Where are dirt and gravel particularly likely to collect?',
        options: [
            'In the center of every dry traffic lane',
            'Only at traffic signals',
            'Along roadway edges, curves, and highway entrance or exit ramps',
            'Only on bridges and overpasses',
        ],
        correctAnswer:
            'Along roadway edges, curves, and highway entrance or exit ramps',
        explanation:
            'Loose material is commonly pushed toward roadway edges and collects where vehicles turn, enter, or exit.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 26',
    },
    {
        id: 323,
        category: 'slippery surfaces',
        question: 'Where are ice patches especially likely to form?',
        options: [
            'In low or shaded areas and on bridges and overpasses',
            'Only in the center of busy intersections',
            'On roads exposed to continuous sunlight',
            'Only beside toll booths',
        ],
        correctAnswer:
            'In low or shaded areas and on bridges and overpasses',
        explanation:
            'These locations cool more quickly or receive less sunlight, allowing ice to form before it does elsewhere.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 26',
    },
    {
        id: 324,
        category: 'slippery surfaces',
        question:
            'How should a rider treat wet leaves or other wet roadway surfaces?',
        options: [
            'As surfaces with normal dry-pavement traction',
            'As safe areas for quick braking',
            'As surfaces requiring increased acceleration',
            'As potentially slippery surfaces',
        ],
        correctAnswer: 'As potentially slippery surfaces',
        explanation:
            'Wet leaves and other wet roadway surfaces can provide very little traction and should be approached cautiously.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 26',
    },
    {
        id: 325,
        category: 'slippery surfaces',
        question:
            'When part of a lane is covered by ice or another slippery material, what should a motorcyclist do?',
        options: [
            'Ride over the most slippery section to remain centered',
            'Use the least slippery portion of the lane and reduce speed',
            'Accelerate while crossing the material',
            'Apply only the rear brake',
        ],
        correctAnswer:
            'Use the least slippery portion of the lane and reduce speed',
        explanation:
            'Choosing the best available surface and reducing speed lowers the amount of traction demanded from the tires.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 26',
    },
    {
        id: 326,
        category: 'slippery surfaces',
        question:
            'What is the safest general choice regarding roads covered with ice or snow?',
        options: [
            'Travel over them at highway speed',
            'Use only the left tire track',
            'Avoid those roads when possible',
            'Use the brakes continuously',
        ],
        correctAnswer: 'Avoid those roads when possible',
        explanation:
            'Ice and snow provide extremely poor traction, so riders should avoid traveling on them whenever possible.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 26',
    },
    {
        id: 327,
        category: 'slippery surfaces',
        question:
            'If a slippery surface cannot be avoided, how should the motorcycle be positioned and operated?',
        options: [
            'Keep it upright and travel as slowly as possible',
            'Lean it sharply and increase speed',
            'Apply maximum brake pressure',
            'Travel with the handlebars turned',
        ],
        correctAnswer: 'Keep it upright and travel as slowly as possible',
        explanation:
            'An upright motorcycle requires less traction than a leaning motorcycle, while low speed reduces the severity of a possible slip.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 26',
    },
    {
        id: 328,
        category: 'slippery surfaces',
        question:
            'If a large surface is so slippery that you must travel at approximately walking speed, what technique may help you maintain balance?',
        options: [
            'Stand fully upright on the footrests',
            'Lock the rear wheel',
            'Accelerate until traction improves',
            'Allow your feet to skim lightly along the surface',
        ],
        correctAnswer: 'Allow your feet to skim lightly along the surface',
        explanation:
            'At walking speed, lightly skimming your feet may allow you to catch the motorcycle if it begins to fall.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 26',
    },
    {
        id: 329,
        category: 'slippery surfaces',
        question:
            'What should you avoid doing while crossing an extremely slippery area at walking speed?',
        options: [
            'Looking toward the intended path',
            'Applying the brakes',
            'Keeping the motorcycle upright',
            'Traveling slowly',
        ],
        correctAnswer: 'Applying the brakes',
        explanation:
            'Braking on an extremely slippery surface may immediately cause a wheel to lose traction.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 26',
    },
    {
        id: 330,
        category: 'slippery surfaces',
        question:
            'When traveling extremely slowly over a very slippery surface, what may help the motorcycle coast smoothly?',
        options: [
            'Applying the front brake continuously',
            'Shifting into the highest gear',
            'Squeezing the clutch',
            'Increasing the throttle sharply',
        ],
        correctAnswer: 'Squeezing the clutch',
        explanation:
            'Squeezing the clutch disengages engine power and allows the motorcycle to coast without abrupt acceleration or engine braking.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 26',
    },
    {
        id: 331,
        category: 'slippery surfaces',
        question:
            'At what speed should the foot-skimming and coasting technique be attempted on an extremely slippery surface?',
        options: [
            'Only at the slowest speeds',
            'At normal highway speed',
            'At any speed below the posted limit',
            'Only while accelerating',
        ],
        correctAnswer: 'Only at the slowest speeds',
        explanation:
            'Skimming your feet is dangerous at normal speeds because a foot could catch on the roadway and cause injury or loss of control.',
        source:
            'Illinois Motorcycle Operator Manual — Slippery Surfaces, page 26',
    },
    {
        id: 332,
        category: 'tracks and pavement seams',
        question:
            'What is usually the safest way to cross railroad tracks that run across your direction of travel?',
        options: [
            'Turn sharply to cross at exactly 90 degrees',
            'Ride along the track before crossing',
            'Cross into another traffic lane first',
            'Continue straight within your lane',
        ],
        correctAnswer: 'Continue straight within your lane',
        explanation:
            'Tracks crossing your path can usually be crossed safely without making a dramatic turn toward a perfect 90-degree angle.',
        source:
            'Illinois Motorcycle Operator Manual — Tracks and Pavement Seams, page 27',
    },
    {
        id: 333,
        category: 'tracks and pavement seams',
        question:
            'Why can turning to cross railroad tracks at a perfect 90-degree angle be more dangerous than continuing straight?',
        options: [
            'The motorcycle’s brakes may stop working',
            'The maneuver may carry the motorcycle into another lane of traffic',
            'The track will become more slippery',
            'The motorcycle will automatically stall',
        ],
        correctAnswer:
            'The maneuver may carry the motorcycle into another lane of traffic',
        explanation:
            'Turning sharply to meet the tracks head-on may create a greater traffic hazard by carrying the motorcycle into another lane.',
        source:
            'Illinois Motorcycle Operator Manual — Tracks and Pavement Seams, page 27',
    },
    {
        id: 334,
        category: 'tracks and pavement seams',
        question:
            'How should a motorcyclist cross tracks, ruts, or pavement seams that run parallel to the motorcycle’s path?',
        options: [
            'Remain directly on top of the seam',
            'Edge across at a very shallow angle',
            'Move away enough to cross at an angle of at least 45 degrees',
            'Stop directly beside the seam',
        ],
        correctAnswer:
            'Move away enough to cross at an angle of at least 45 degrees',
        explanation:
            'A crossing angle of at least 45 degrees reduces the chance of the tire becoming trapped in the parallel track, rut, or seam.',
        source:
            'Illinois Motorcycle Operator Manual — Tracks and Pavement Seams, page 27',
    },
    {
        id: 335,
        category: 'tracks and pavement seams',
        question:
            'After creating enough space from a parallel track or pavement seam, how should the rider cross it?',
        options: [
            'Make a quick, sharp turn across it rather than gradually edging over',
            'Drift across it as slowly as possible',
            'Apply maximum brake pressure while crossing',
            'Follow the seam until it ends',
        ],
        correctAnswer:
            'Make a quick, sharp turn across it rather than gradually edging over',
        explanation:
            'Gradually edging across may allow the tire to catch in the groove and throw the motorcycle off balance.',
        source:
            'Illinois Motorcycle Operator Manual — Tracks and Pavement Seams, page 27',
    },
    {
        id: 336,
        category: 'grooves and gratings',
        question:
            'What may a motorcycle do while traveling over rain grooves or bridge gratings?',
        options: [
            'Stop tracking altogether',
            'Accelerate without throttle input',
            'Lean sharply toward the shoulder',
            'Weave or wander slightly',
        ],
        correctAnswer: 'Weave or wander slightly',
        explanation:
            'Grooves and grating patterns may guide the tires from side to side, producing a slight wandering sensation.',
        source:
            'Illinois Motorcycle Operator Manual — Grooves and Gratings, page 27',
    },
    {
        id: 337,
        category: 'grooves and gratings',
        question:
            'How should a rider respond to the wandering sensation caused by rain grooves or bridge gratings?',
        options: [
            'Grip the handlebars rigidly and brake sharply',
            'Relax, maintain a steady speed, and ride straight across',
            'Accelerate rapidly while zigzagging',
            'Stop directly on the grating',
        ],
        correctAnswer:
            'Relax, maintain a steady speed, and ride straight across',
        explanation:
            'The wandering sensation is generally not dangerous. Smooth, relaxed, and steady travel is safer than fighting the motorcycle.',
        source:
            'Illinois Motorcycle Operator Manual — Grooves and Gratings, page 27',
    },
    {
        id: 338,
        category: 'grooves and gratings',
        question:
            'Why should a motorcyclist avoid crossing grooves or bridge gratings at an angle?',
        options: [
            'The motorcycle’s headlight may turn off',
            'The front brake will become ineffective',
            'Angled crossing can produce a hazardous zigzag as the rider attempts to remain in the lane',
            'The tires will always become trapped immediately',
        ],
        correctAnswer:
            'Angled crossing can produce a hazardous zigzag as the rider attempts to remain in the lane',
        explanation:
            'Crossing at an angle requires repeated steering corrections, creating a zigzag that may be more dangerous than the normal wandering sensation.',
        source:
            'Illinois Motorcycle Operator Manual — Grooves and Gratings, page 27',
    },
    {
        id: 339,
        category: 'general mechanical emergencies',
        question: 'What should a motorcyclist consider when responding to any mechanical failure while riding?',
        options: [
            'Only the cost of repairing the motorcycle',
            'Whether other riders have experienced the same problem',
            'The surrounding roadway and traffic conditions',
            'Whether the motorcycle remains under warranty',
        ],
        correctAnswer: 'The surrounding roadway and traffic conditions',
        explanation: 'The safest response depends not only on the mechanical failure but also on traffic, pavement, speed, and available escape space.',
        source: 'Illinois Motorcycle Operator Manual — General Mechanical Emergencies',
    },
    {
        id: 340,
        category: 'tire failure',
        question: 'How will a motorcyclist usually first recognize that a tire is losing air?',
        options: [
            'The motorcycle will begin handling differently',
            'The rider will hear a loud explosion',
            'The motorcycle’s headlight will flash',
            'The engine will immediately stop',
        ],
        correctAnswer: 'The motorcycle will begin handling differently',
        explanation: 'A rider will usually recognize a flat tire through changes in steering or stability rather than through sound.',
        source: 'Illinois Motorcycle Operator Manual — Tire Failure',
    },
    {
        id: 341,
        category: 'tire failure',
        question: 'Why should riders learn to recognize tire failure through the motorcycle’s behavior?',
        options: [
            'Tire failures always cause the engine to overheat',
            'The speedometer will stop operating',
            'Both brakes will stop working',
            'Riders will seldom hear a tire going flat',
        ],
        correctAnswer: 'Riders will seldom hear a tire going flat',
        explanation: 'Because tire failure may be nearly silent, riders must recognize how the motorcycle reacts when air pressure is lost.',
        source: 'Illinois Motorcycle Operator Manual — Tire Failure',
    },
    {
        id: 342,
        category: 'tire failure',
        question: 'What should a rider do when a motorcycle tire suddenly loses air?',
        options: [
            'Apply both brakes as hard as possible',
            'React quickly to maintain balance, pull off, and inspect the tires',
            'Accelerate to stabilize the motorcycle',
            'Turn sharply toward the shoulder',
        ],
        correctAnswer: 'React quickly to maintain balance, pull off, and inspect the tires',
        explanation: 'A sudden loss of air makes the motorcycle unstable. The priority is maintaining control before safely leaving traffic.',
        source: 'Illinois Motorcycle Operator Manual — Tire Failure',
    },
    {
        id: 343,
        category: 'tire failure',
        question: 'How will the motorcycle’s steering generally feel if the front tire goes flat?',
        options: [
            'Extremely light',
            'Completely unchanged',
            'Heavy',
            'Locked toward the right',
        ],
        correctAnswer: 'Heavy',
        explanation: 'A flat front tire creates heavy steering because the damaged tire no longer rolls and responds normally.',
        source: 'Illinois Motorcycle Operator Manual — Tire Failure',
    },
    {
        id: 344,
        category: 'tire failure',
        question: 'Why is a flat front tire particularly dangerous?',
        options: [
            'It directly affects steering and makes maintaining balance more difficult',
            'It automatically locks the rear wheel',
            'It prevents the engine from producing power',
            'It causes the chain to break',
        ],
        correctAnswer: 'It directly affects steering and makes maintaining balance more difficult',
        explanation: 'The front wheel controls direction, so a failure there is especially hazardous.',
        source: 'Illinois Motorcycle Operator Manual — Tire Failure',
    },
    {
        id: 345,
        category: 'tire failure',
        question: 'What handling behavior may indicate that the motorcycle’s rear tire has gone flat?',
        options: [
            'The steering becomes extremely heavy',
            'The front wheel begins bouncing',
            'The engine speed suddenly increases',
            'The rear of the motorcycle jerks or sways from side to side',
        ],
        correctAnswer: 'The rear of the motorcycle jerks or sways from side to side',
        explanation: 'A flat rear tire allows the back of the motorcycle to move unpredictably because the tire can no longer maintain its proper shape and traction.',
        source: 'Illinois Motorcycle Operator Manual — Tire Failure',
    },
    {
        id: 346,
        category: 'tire failure',
        question: 'If either tire suddenly loses air while riding, what should the rider initially do?',
        options: [
            'Release the handlebars and coast',
            'Grip the handlebars firmly, ease off the throttle, and maintain a straight course',
            'Turn sharply toward the nearest shoulder',
            'Apply maximum pressure to both brakes',
        ],
        correctAnswer: 'Grip the handlebars firmly, ease off the throttle, and maintain a straight course',
        explanation: 'Smoothly reducing power while traveling straight helps stabilize the motorcycle.',
        source: 'Illinois Motorcycle Operator Manual — Tire Failure',
    },
    {
        id: 347,
        category: 'tire failure',
        question: 'If braking is necessary after a tire goes flat, which brake should generally be applied?',
        options: [
            'The brake controlling the flat tire',
            'Both brakes with maximum pressure',
            'The brake controlling the tire that is not flat',
            'Only the rear brake regardless of which tire failed',
        ],
        correctAnswer: 'The brake controlling the tire that is not flat',
        explanation: 'Braking with the damaged tire may worsen instability, so use the brake attached to the functioning tire when braking is necessary.',
        source: 'Illinois Motorcycle Operator Manual — Tire Failure',
    },
    {
        id: 348,
        category: 'tire failure',
        question: 'When should a rider use the brake belonging to the tire that is not flat?',
        options: [
            'When the rider is certain which tire has failed',
            'Whenever the steering feels heavy',
            'Only after the motorcycle has stopped',
            'Before easing off the throttle',
        ],
        correctAnswer: 'When the rider is certain which tire has failed',
        explanation: 'Using the wrong brake could place additional force on the flat tire and cause a loss of control.',
        source: 'Illinois Motorcycle Operator Manual — Tire Failure',
    },
    {
        id: 349,
        category: 'tire failure',
        question: 'Once the motorcycle has slowed after a tire failure, how should the rider finish stopping?',
        options: [
            'Turn sharply and apply the front brake',
            'Accelerate onto the shoulder',
            'Stop in the traffic lane without using the clutch',
            'Gradually move to the roadside, squeeze the clutch, and stop',
        ],
        correctAnswer: 'Gradually move to the roadside, squeeze the clutch, and stop',
        explanation: 'Wait until the motorcycle has slowed before carefully moving out of traffic and disengaging the engine.',
        source: 'Illinois Motorcycle Operator Manual — Tire Failure',
    },
    {
        id: 350,
        category: 'tire failure',
        question: 'Why should a rider avoid making abrupt steering or braking inputs immediately after a tire loses air?',
        options: [
            'Abrupt inputs improve balance too quickly',
            'The motorcycle is already unstable and sudden movements can cause loss of control',
            'The throttle cannot operate during a tire failure',
            'Abrupt braking repairs the damaged tire',
        ],
        correctAnswer: 'The motorcycle is already unstable and sudden movements can cause loss of control',
        explanation: 'Abrupt braking or steering can overwhelm the limited stability remaining after a tire loses air.',
        source: 'Illinois Motorcycle Operator Manual — Tire Failure',
    },
    {
        id: 351,
        category: 'stuck throttle',
        question: 'What should a rider first try if a motorcycle’s throttle becomes stuck?',
        options: [
            'Apply the rear brake continuously',
            'Shift into the highest gear',
            'Twist the throttle back and forth several times',
            'Turn the handlebars from side to side',
        ],
        correctAnswer: 'Twist the throttle back and forth several times',
        explanation: 'Moving the throttle repeatedly may release a stuck cable or control mechanism.',
        source: 'Illinois Motorcycle Operator Manual — Stuck Throttle',
    },
    {
        id: 352,
        category: 'stuck throttle',
        question: 'If twisting the throttle does not free it, what should the rider do immediately?',
        options: [
            'Operate the engine cut-off switch and pull in the clutch simultaneously',
            'Apply only the front brake',
            'Shift into neutral without using the clutch',
            'Accelerate until the throttle releases',
        ],
        correctAnswer: 'Operate the engine cut-off switch and pull in the clutch simultaneously',
        explanation: 'If the throttle cannot be freed, these actions stop engine power from reaching the rear wheel.',
        source: 'Illinois Motorcycle Operator Manual — Stuck Throttle',
    },
    {
        id: 353,
        category: 'stuck throttle',
        question: 'What is the purpose of using the engine cut-off switch and clutch when the throttle remains stuck?',
        options: [
            'To increase engine power',
            'To lock the rear wheel',
            'To reset the throttle cable',
            'To remove engine power from the rear wheel',
        ],
        correctAnswer: 'To remove engine power from the rear wheel',
        explanation: 'The cut-off switch stops the engine while the clutch mechanically disconnects it from the drive wheel.',
        source: 'Illinois Motorcycle Operator Manual — Stuck Throttle',
    },
    {
        id: 354,
        category: 'stuck throttle',
        question: 'After operating the engine cut-off switch on a stuck throttle, what may happen to the engine noise?',
        options: [
            'It will always stop instantly',
            'It may not decrease immediately',
            'It will become permanently louder',
            'It will indicate which brake to use',
        ],
        correctAnswer: 'It may not decrease immediately',
        explanation: 'The engine may continue making noise briefly even though power is no longer driving the rear wheel.',
        source: 'Illinois Motorcycle Operator Manual — Stuck Throttle',
    },
    {
        id: 355,
        category: 'stuck throttle',
        question: 'Once a motorcycle with a stuck throttle is under control, what should the rider do?',
        options: [
            'Continue riding until reaching a repair shop',
            'Restart the engine immediately',
            'Pull off the road and stop',
            'Shift into a higher gear',
        ],
        correctAnswer: 'Pull off the road and stop',
        explanation: 'After regaining control, leave traffic rather than continuing to operate a motorcycle with an unresolved throttle problem.',
        source: 'Illinois Motorcycle Operator Manual — Stuck Throttle',
    },
    {
        id: 356,
        category: 'stuck throttle',
        question: 'After stopping because of a stuck throttle, what component should the rider inspect carefully?',
        options: [
            'The throttle cable',
            'The rear brake light',
            'The front wheel bearing',
            'The license plate',
        ],
        correctAnswer: 'The throttle cable',
        explanation: 'Inspect the cable carefully to determine why the throttle became stuck.',
        source: 'Illinois Motorcycle Operator Manual — Stuck Throttle',
    },
    {
        id: 357,
        category: 'stuck throttle',
        question: 'Before riding again after a stuck-throttle incident, what must the rider confirm?',
        options: [
            'The fuel tank is completely full',
            'The engine produces more power',
            'The rear brake is disconnected',
            'The throttle operates freely',
        ],
        correctAnswer: 'The throttle operates freely',
        explanation: 'Do not resume riding until the throttle returns smoothly and reliably.',
        source: 'Illinois Motorcycle Operator Manual — Stuck Throttle',
    },
    {
        id: 358,
        category: 'wobble',
        question: 'What is a motorcycle wobble?',
        options: [
            'A rear tire gradually losing air',
            'The front wheel and handlebars suddenly shaking from side to side',
            'The chain slipping during acceleration',
            'The engine losing power while climbing a hill',
        ],
        correctAnswer: 'The front wheel and handlebars suddenly shaking from side to side',
        explanation: 'A wobble is a rapid side-to-side movement that may happen at any speed.',
        source: 'Illinois Motorcycle Operator Manual — Wobble',
    },
    {
        id: 359,
        category: 'wobble',
        question: 'Which problems commonly contribute to motorcycle wobble?',
        options: [
            'A bright headlight and properly balanced cargo',
            'Gradual braking and correct tire pressure',
            'Improper loading, unsuitable accessories, or incorrect tire pressure',
            'Using both brakes during ordinary stops',
        ],
        correctAnswer: 'Improper loading, unsuitable accessories, or incorrect tire pressure',
        explanation: 'These conditions can disturb the motorcycle’s balance, steering geometry, or suspension.',
        source: 'Illinois Motorcycle Operator Manual — Wobble',
    },
    {
        id: 360,
        category: 'wobble',
        question: 'What should a rider do if an excessively heavy load may be causing a wobble?',
        options: [
            'Lighten the load or reposition it',
            'Move the load higher and farther backward',
            'Accelerate to stabilize the load',
            'Apply the brakes sharply',
        ],
        correctAnswer: 'Lighten the load or reposition it',
        explanation: 'Removing excess weight is best. If that is impossible, redistribute it more safely.',
        source: 'Illinois Motorcycle Operator Manual — Wobble',
    },
    {
        id: 361,
        category: 'wobble',
        question: 'Where should cargo weight be centered to reduce the likelihood of wobble?',
        options: [
            'High and toward the rear',
            'Entirely on one side',
            'Directly over the handlebars',
            'Lower and farther forward',
        ],
        correctAnswer: 'Lower and farther forward',
        explanation: 'Keeping weight low and forward improves stability and reduces its effect on steering.',
        source: 'Illinois Motorcycle Operator Manual — Wobble',
    },
    {
        id: 362,
        category: 'wobble',
        question: 'Which motorcycle settings should be appropriate for the amount of weight being carried?',
        options: [
            'Headlight aim and horn volume only',
            'Tire pressure, spring preload, air shocks, and dampers',
            'Mirror position and turn-signal timing',
            'Engine cut-off switch and clutch cable',
        ],
        correctAnswer: 'Tire pressure, spring preload, air shocks, and dampers',
        explanation: 'These settings must match the amount of weight the motorcycle is carrying.',
        source: 'Illinois Motorcycle Operator Manual — Wobble',
    },
    {
        id: 363,
        category: 'wobble',
        question: 'Which accessories should be inspected for proper mounting when investigating a wobble?',
        options: [
            'Passenger footrests and seat covers',
            'License plates and reflectors',
            'Windshields and fairings',
            'Helmets and gloves',
        ],
        correctAnswer: 'Windshields and fairings',
        explanation: 'Improperly mounted accessories can disrupt airflow or vibrate enough to contribute to instability.',
        source: 'Illinois Motorcycle Operator Manual — Wobble',
    },
    {
        id: 364,
        category: 'wobble',
        question: 'Which mechanical problems should be checked when attempting to identify the cause of a wobble?',
        options: [
            'Steering adjustment, worn steering parts, wheel alignment or balance, bearings, and spokes',
            'Only the motorcycle’s horn',
            'Brake-light brightness and turn-signal color',
            'Fuel level and license-plate condition',
        ],
        correctAnswer: 'Steering adjustment, worn steering parts, wheel alignment or balance, bearings, and spokes',
        explanation: 'Any of these mechanical conditions may allow uncontrolled movement in the front end or chassis.',
        source: 'Illinois Motorcycle Operator Manual — Wobble',
    },
    {
        id: 365,
        category: 'wobble',
        question: 'If the cause of a wobble cannot be found, what should the owner do?',
        options: [
            'Continue riding at a lower speed indefinitely',
            'Remove the front brake',
            'Increase the tire pressure beyond its recommendation',
            'Have the motorcycle thoroughly inspected by a qualified professional',
        ],
        correctAnswer: 'Have the motorcycle thoroughly inspected by a qualified professional',
        explanation: 'An unexplained wobble may result from a serious mechanical problem that requires expert inspection.',
        source: 'Illinois Motorcycle Operator Manual — Wobble',
    },
    {
        id: 366,
        category: 'wobble',
        question: 'What happens if a rider attempts to accelerate out of a motorcycle wobble?',
        options: [
            'The wobble always stops immediately',
            'The motorcycle becomes more unstable',
            'The tire pressure returns to normal',
            'The load automatically shifts forward',
        ],
        correctAnswer: 'The motorcycle becomes more unstable',
        explanation: 'Accelerating increases the forces contributing to the wobble and can make it more violent.',
        source: 'Illinois Motorcycle Operator Manual — Wobble',
    },
    {
        id: 367,
        category: 'wobble',
        question: 'How should a rider hold the handlebars during a wobble?',
        options: [
            'Loosely while allowing them to shake freely',
            'With one hand while signaling',
            'Firmly, without fighting the wobble',
            'As tightly as possible while steering sharply',
        ],
        correctAnswer: 'Firmly, without fighting the wobble',
        explanation: 'A firm grip preserves control, but forcefully fighting the handlebars may amplify the shaking.',
        source: 'Illinois Motorcycle Operator Manual — Wobble',
    },
    {
        id: 368,
        category: 'wobble',
        question: 'How should a rider reduce speed during a motorcycle wobble?',
        options: [
            'Gradually close the throttle without applying the brakes',
            'Apply both brakes at maximum pressure',
            'Downshift repeatedly while accelerating',
            'Apply only the front brake',
        ],
        correctAnswer: 'Gradually close the throttle without applying the brakes',
        explanation: 'Smoothly reducing speed can allow the wobble to settle. Braking may make the instability worse.',
        source: 'Illinois Motorcycle Operator Manual — Wobble',
    },
    {
        id: 369,
        category: 'wobble',
        question: 'Where should a rider move their body weight during a wobble?',
        options: [
            'High and toward the rear',
            'Entirely to one side',
            'Away from the fuel tank',
            'As far forward and downward as possible',
        ],
        correctAnswer: 'As far forward and downward as possible',
        explanation: 'Moving weight forward and low helps stabilize the motorcycle’s front end.',
        source: 'Illinois Motorcycle Operator Manual — Wobble',
    },
    {
        id: 370,
        category: 'wobble',
        question: 'After stabilizing a motorcycle experiencing wobble, what should the rider do?',
        options: [
            'Continue riding until the wobble returns',
            'Pull off the road as soon as possible and correct the problem',
            'Accelerate to test the motorcycle',
            'Shift the load farther backward',
        ],
        correctAnswer: 'Pull off the road as soon as possible and correct the problem',
        explanation: 'Even if the wobble stops, its underlying cause remains and may trigger another incident.',
        source: 'Illinois Motorcycle Operator Manual — Wobble',
    },
    {
        id: 371,
        category: 'chain problems',
        question: 'What danger can result if a motorcycle’s drive chain slips or breaks while riding?',
        options: [
            'The front brake may become stronger',
            'The headlight may switch off',
            'The rear wheel may lock and cause a skid',
            'The front tire may immediately deflate',
        ],
        correctAnswer: 'The rear wheel may lock and cause a skid',
        explanation: 'A slipping or broken chain can jam the drivetrain and prevent the rear wheel from rotating normally.',
        source: 'Illinois Motorcycle Operator Manual — Chain Problems',
    },
    {
        id: 372,
        category: 'chain problems',
        question: 'What is the best way to prevent motorcycle chain slippage or breakage?',
        options: [
            'Perform proper chain maintenance',
            'Keep the chain as loose as possible',
            'Avoid using the rear brake',
            'Accelerate slowly in every gear',
        ],
        correctAnswer: 'Perform proper chain maintenance',
        explanation: 'Correct tension, lubrication, and replacement of worn components reduce the likelihood of chain failure.',
        source: 'Illinois Motorcycle Operator Manual — Chain Problems',
    },
    {
        id: 373,
        category: 'chain problems',
        question: 'If the chain slips while accelerating quickly or riding uphill, what should the rider do?',
        options: [
            'Continue riding until power returns',
            'Shift into a higher gear',
            'Apply additional throttle',
            'Pull off the road',
        ],
        correctAnswer: 'Pull off the road',
        explanation: 'Chain slippage under acceleration or while climbing indicates a problem that should be inspected before continuing.',
        source: 'Illinois Motorcycle Operator Manual — Chain Problems',
    },
    {
        id: 374,
        category: 'chain problems',
        question: 'Which components should be inspected after a motorcycle’s chain slips?',
        options: [
            'The mirrors and brake lights',
            'The chain and sprockets',
            'The handlebars and horn',
            'The throttle and fuel valve',
        ],
        correctAnswer: 'The chain and sprockets',
        explanation: 'Slippage can result from incorrect chain tension, a stretched chain, or worn or bent sprocket teeth.',
        source: 'Illinois Motorcycle Operator Manual — Chain Problems',
    },
    {
        id: 375,
        category: 'chain problems',
        question: 'What adjustment may correct some cases of chain slippage?',
        options: [
            'Lowering the tire pressure',
            'Moving the handlebars',
            'Tightening the chain',
            'Disconnecting the clutch',
        ],
        correctAnswer: 'Tightening the chain',
        explanation: 'If excess looseness caused the slippage, correcting the tension may solve the problem.',
        source: 'Illinois Motorcycle Operator Manual — Chain Problems',
    },
    {
        id: 376,
        category: 'chain problems',
        question: 'What should be done if chain slippage is caused by a worn or stretched chain or damaged sprockets?',
        options: [
            'Replace the chain, the sprockets, or both before riding again',
            'Apply lubricant and immediately continue riding',
            'Increase the engine speed',
            'Loosen the chain further',
        ],
        correctAnswer: 'Replace the chain, the sprockets, or both before riding again',
        explanation: 'Worn, stretched, or bent components cannot be safely repaired through tension adjustment alone.',
        source: 'Illinois Motorcycle Operator Manual — Chain Problems',
    },
    {
        id: 377,
        category: 'chain problems',
        question: 'What symptom will a rider notice immediately if the motorcycle’s chain breaks?',
        options: [
            'Heavy front steering',
            'A louder horn',
            'Increased rear-wheel power',
            'An immediate loss of power to the rear wheel',
        ],
        correctAnswer: 'An immediate loss of power to the rear wheel',
        explanation: 'A broken chain disconnects the engine from the rear wheel, so engine power no longer propels the motorcycle.',
        source: 'Illinois Motorcycle Operator Manual — Chain Problems',
    },
    {
        id: 378,
        category: 'chain problems',
        question: 'How should a rider respond when the motorcycle’s chain breaks?',
        options: [
            'Accelerate to reconnect the chain',
            'Close the throttle and brake to a stop',
            'Shift repeatedly through every gear',
            'Apply only the rear brake while increasing throttle',
        ],
        correctAnswer: 'Close the throttle and brake to a stop',
        explanation: 'With power no longer reaching the rear wheel, smoothly reduce throttle and stop in a controlled manner.',
        source: 'Illinois Motorcycle Operator Manual — Chain Problems',
    },
    {
        id: 379,
        category: 'engine seizure',
        question: 'What commonly causes a motorcycle engine to lock or seize?',
        options: [
            'Excessive tire pressure',
            'A loose drive chain',
            'Insufficient engine oil',
            'An overly bright headlight',
        ],
        correctAnswer: 'Insufficient engine oil',
        explanation: 'An engine commonly seizes because it lacks enough lubrication for its moving internal parts.',
        source: 'Illinois Motorcycle Operator Manual — Engine Seizure',
    },
    {
        id: 380,
        category: 'engine seizure',
        question: 'Why does insufficient oil cause a motorcycle engine to overheat and seize?',
        options: [
            'The moving engine parts cannot move smoothly against one another',
            'The oil causes the rear wheel to lock',
            'The throttle cable becomes stretched',
            'The front tire loses air',
        ],
        correctAnswer: 'The moving engine parts cannot move smoothly against one another',
        explanation: 'Without sufficient oil, friction and heat rapidly increase until the internal parts lock together.',
        source: 'Illinois Motorcycle Operator Manual — Engine Seizure',
    },
    {
        id: 381,
        category: 'engine seizure',
        question: 'What may be an early warning sign of an engine beginning to seize?',
        options: [
            'The motorcycle’s mirrors begin vibrating',
            'The rear brake becomes more powerful',
            'The headlight becomes brighter',
            'A loss of engine power or a change in engine sound',
        ],
        correctAnswer: 'A loss of engine power or a change in engine sound',
        explanation: 'These changes may be the first warning that the engine is overheating and beginning to seize.',
        source: 'Illinois Motorcycle Operator Manual — Engine Seizure',
    },
    {
        id: 382,
        category: 'engine seizure',
        question: 'What should a rider do with the clutch if the motorcycle’s engine begins to seize?',
        options: [
            'Release it completely',
            'Squeeze the clutch lever to disconnect the engine from the rear wheel',
            'Pump it repeatedly while accelerating',
            'Avoid touching it',
        ],
        correctAnswer: 'Squeeze the clutch lever to disconnect the engine from the rear wheel',
        explanation: 'Disengaging the clutch prevents the locking engine from immediately locking the rear wheel.',
        source: 'Illinois Motorcycle Operator Manual — Engine Seizure',
    },
    {
        id: 383,
        category: 'engine seizure',
        question: 'After disengaging a seizing engine from the rear wheel, what should the rider do?',
        options: [
            'Restart the engine immediately',
            'Continue riding at low speed',
            'Pull off the road, stop, and check the oil',
            'Apply only the rear brake while accelerating',
        ],
        correctAnswer: 'Pull off the road, stop, and check the oil',
        explanation: 'Stop safely and investigate the oil level rather than attempting to continue riding.',
        source: 'Illinois Motorcycle Operator Manual — Engine Seizure',
    },
    {
        id: 384,
        category: 'engine seizure',
        question: 'What should a rider remember after an engine seizure?',
        options: [
            'A seized engine acts like a locked rear wheel, and the engine should cool before restarting',
            'The engine should be restarted while still hot',
            'The motorcycle can safely continue without oil',
            'The front brake must be disconnected',
        ],
        correctAnswer: 'A seized engine acts like a locked rear wheel, and the engine should cool before restarting',
        explanation: 'An engine lock can prevent the rear wheel from rotating. After checking and adding oil if needed, allow the engine to cool before attempting a restart.',
        source: 'Illinois Motorcycle Operator Manual — Engine Seizure',
    },
    {
        id: 385,
        category: 'animals',
        question: 'When an animal enters a motorcyclist’s path, what should the rider generally try to do?',
        options: [
            'Accelerate before the animal can move',
            'Do everything safely possible to avoid hitting it',
            'Sound the horn continuously and maintain speed',
            'Immediately leave the paved roadway',
        ],
        correctAnswer: 'Do everything safely possible to avoid hitting it',
        explanation: 'A rider should avoid striking an animal whenever this can be done safely. However, avoiding the animal should not create a more serious collision.',
        source: 'Illinois Motorcycle Operator Manual — Animals',
    },
    {
        id: 386,
        category: 'animals',
        question: 'A motorcyclist encounters a small animal while surrounded by traffic. What should the rider do if swerving would mean leaving the lane or entering another vehicle’s path?',
        options: [
            'Cross into the next lane without checking',
            'Stop immediately in the travel lane',
            'Ride onto the shoulder at full speed',
            'Remain in the lane and maintain control',
        ],
        correctAnswer: 'Remain in the lane and maintain control',
        explanation: 'When surrounded by traffic, suddenly leaving the lane could place the rider in front of another vehicle. Maintaining control is safer than making a dangerous swerve.',
        source: 'Illinois Motorcycle Operator Manual — Animals',
    },
    {
        id: 387,
        category: 'animals',
        question: 'Why might striking a small animal be safer than swerving into another vehicle?',
        options: [
            'Colliding with something small may be less dangerous than hitting a car',
            'Small animals cannot affect motorcycle balance',
            'Other drivers are required to move out of the rider’s way',
            'Motorcycle tires cannot be damaged by small objects',
        ],
        correctAnswer: 'Colliding with something small may be less dangerous than hitting a car',
        explanation: 'Swerving into a larger vehicle could cause a much more serious crash. The rider must consider the danger created by the avoidance maneuver.',
        source: 'Illinois Motorcycle Operator Manual — Animals',
    },
    {
        id: 388,
        category: 'animals',
        question: 'A dog begins chasing a motorcycle. According to the manual, what technique should the rider use?',
        options: [
            'Stop beside the dog and wait',
            'Kick toward the dog while maintaining speed',
            'Downshift, approach slowly, and then accelerate away',
            'Swerve repeatedly across the lane',
        ],
        correctAnswer: 'Downshift, approach slowly, and then accelerate away',
        explanation: 'Approaching slowly helps control the timing of the encounter. The rider can then accelerate away, leaving the chasing dog behind.',
        source: 'Illinois Motorcycle Operator Manual — Animals',
    },
    {
        id: 389,
        category: 'animals',
        question: 'Why should a motorcyclist avoid kicking at a dog that is chasing the motorcycle?',
        options: [
            'It will cause the motorcycle’s engine to stall',
            'It can interfere with the rider’s control and balance',
            'It prevents the rider from using the horn',
            'It automatically activates the rear brake',
        ],
        correctAnswer: 'It can interfere with the rider’s control and balance',
        explanation: 'Kicking removes a foot from its proper position and may destabilize the motorcycle. The rider should keep control instead of trying to strike the dog.',
        source: 'Illinois Motorcycle Operator Manual — Animals',
    },
    {
        id: 390,
        category: 'animals',
        question: 'While being chased by a dog, where should the motorcyclist look?',
        options: [
            'Directly down at the front tire',
            'Backward at the dog continuously',
            'Toward the side of the roadway',
            'Where the rider wants the motorcycle to go',
        ],
        correctAnswer: 'Where the rider wants the motorcycle to go',
        explanation: 'Motorcycles tend to travel in the direction the rider is looking. Watching the intended path helps the rider maintain control and avoid target fixation on the animal.',
        source: 'Illinois Motorcycle Operator Manual — Animals',
    },
    {
        id: 391,
        category: 'animals',
        question: 'What should a motorcyclist do when encountering a large animal such as a deer or cow?',
        options: [
            'Brake and prepare to stop',
            'Accelerate directly toward it',
            'Pass closely behind it',
            'Assume it will remain still',
        ],
        correctAnswer: 'Brake and prepare to stop',
        explanation: 'Large animals can cause a severe collision. The rider should reduce speed and be ready to stop rather than attempting the dog-chasing technique.',
        source: 'Illinois Motorcycle Operator Manual — Animals',
    },
    {
        id: 392,
        category: 'animals',
        question: 'Why should a rider prepare to stop for deer, cattle, and other large animals?',
        options: [
            'Large animals always run toward headlights',
            'Motorcycles are legally required to stop near farms',
            'Large animals can behave unpredictably',
            'Large animals cannot see moving vehicles',
        ],
        correctAnswer: 'Large animals can behave unpredictably',
        explanation: 'Deer, cattle, and similar animals may suddenly stop, turn, or enter the rider’s path. Riders should never assume they will remain still.',
        source: 'Illinois Motorcycle Operator Manual — Animals',
    },
    {
        id: 393,
        category: 'animals',
        question: 'A small animal suddenly appears ahead while the rider is in dense traffic. Which decision best follows the manual’s guidance?',
        options: [
            'Swerve immediately, regardless of nearby traffic',
            'Prioritize maintaining control and avoiding a collision with a larger vehicle',
            'Accelerate into the lane beside the motorcycle',
            'Look backward before deciding what to do',
        ],
        correctAnswer: 'Prioritize maintaining control and avoiding a collision with a larger vehicle',
        explanation: 'In dense traffic, an uncontrolled swerve may lead directly into a car. Hitting something small may be less dangerous than colliding with a larger vehicle.',
        source: 'Illinois Motorcycle Operator Manual — Animals',
    },
    {
        id: 394,
        category: 'animals',
        question: 'Which action is specifically discouraged when a dog chases a motorcycle?',
        options: [
            'Downshifting',
            'Approaching the animal slowly',
            'Accelerating away after approaching',
            'Kicking at the animal',
        ],
        correctAnswer: 'Kicking at the animal',
        explanation: 'The manual specifically warns riders not to kick at a chasing dog. Both feet should remain properly positioned so the rider can control the motorcycle.',
        source: 'Illinois Motorcycle Operator Manual — Animals',
    },
    {
        id: 395,
        category: 'animals',
        question: 'After downshifting and approaching a chasing dog slowly, what should the rider do next?',
        options: [
            'Accelerate away and leave the dog behind',
            'Stop and dismount from the motorcycle',
            'Turn around and ride toward the dog',
            'Put both feet down while continuing to move',
        ],
        correctAnswer: 'Accelerate away and leave the dog behind',
        explanation: 'After downshifting and approaching slowly, the rider should accelerate away. The change in speed helps the rider safely separate from the dog.',
        source: 'Illinois Motorcycle Operator Manual — Animals',
    },
    {
        id: 396,
        category: 'animals',
        question: 'Which response correctly distinguishes between dogs and larger animals?',
        options: [
            'Stop immediately for dogs but accelerate toward deer',
            'Use the same maneuver for every animal',
            'Approach a chasing dog slowly before accelerating away, but brake and prepare to stop for a large animal',
            'Kick at dogs and sound the horn at deer',
        ],
        correctAnswer: 'Approach a chasing dog slowly before accelerating away, but brake and prepare to stop for a large animal',
        explanation: 'Dogs and large animals require different responses. The dog technique creates separation, while large unpredictable animals require braking and preparation to stop.',
        source: 'Illinois Motorcycle Operator Manual — Animals',
    },
    {
        id: 397,
        category: 'flying objects',
        question: 'Which is an example of a flying object that may strike a motorcyclist?',
        options: [
            'A painted lane marking',
            'A pebble kicked up by the vehicle ahead',
            'A traffic signal changing color',
            'A shadow from an overhead bridge',
        ],
        correctAnswer: 'A pebble kicked up by the vehicle ahead',
        explanation: 'Pebbles, insects, and cigarettes thrown from vehicles are examples of flying objects that may strike a motorcyclist.',
        source: 'Illinois Motorcycle Operator Manual — Flying Objects',
    },
    {
        id: 398,
        category: 'flying objects',
        question: 'If an insect or pebble strikes a rider’s face protection and makes it difficult to see, what should the rider do first?',
        options: [
            'Remove the face protection immediately while moving',
            'Close both eyes and brake sharply',
            'Release the handlebars and wipe the shield',
            'Keep eyes on the road and hands on the handlebars',
        ],
        correctAnswer: 'Keep eyes on the road and hands on the handlebars',
        explanation: 'Even if the rider’s vision is affected, controlling the motorcycle remains the immediate priority. Trying to clean or remove the shield while moving could cause a crash.',
        source: 'Illinois Motorcycle Operator Manual — Flying Objects',
    },
    {
        id: 399,
        category: 'flying objects',
        question: 'What could happen when a flying object strikes a motorcycle rider’s face protection?',
        options: [
            'The protection could become smeared or cracked',
            'The motorcycle’s brakes could automatically engage',
            'The engine could immediately seize',
            'The rear tire could lose pressure',
        ],
        correctAnswer: 'The protection could become smeared or cracked',
        explanation: 'An insect or other flying object may damage or cover the face protection, making it difficult for the rider to see clearly.',
        source: 'Illinois Motorcycle Operator Manual — Flying Objects',
    },
    {
        id: 400,
        category: 'flying objects',
        question: 'Without face protection, where could a flying object strike the rider?',
        options: [
            'Only the rider’s helmet',
            'Only the rider’s chest',
            'The rider’s eye, face, or mouth',
            'Only the motorcycle’s windshield',
        ],
        correctAnswer: 'The rider’s eye, face, or mouth',
        explanation: 'Without face protection, flying objects can directly strike sensitive and exposed parts of the rider’s face.',
        source: 'Illinois Motorcycle Operator Manual — Flying Objects',
    },
    {
        id: 401,
        category: 'flying objects',
        question: 'A cigarette thrown from a car strikes a motorcyclist. What should the rider avoid doing while the motorcycle is still moving?',
        options: [
            'Looking toward the intended path',
            'Taking hands off the handlebars to deal with it',
            'Maintaining control of the motorcycle',
            'Pulling over once it is safe',
        ],
        correctAnswer: 'Taking hands off the handlebars to deal with it',
        explanation: 'The rider should keep both hands on the handlebars and continue looking at the road. Dealing with the object while moving could result in loss of control.',
        source: 'Illinois Motorcycle Operator Manual — Flying Objects',
    },
    {
        id: 402,
        category: 'flying objects',
        question: 'When should a rider pull off the road to inspect or repair damage caused by a flying object?',
        options: [
            'The instant the object strikes, regardless of traffic',
            'Only after reaching the final destination',
            'While continuing to ride with one hand',
            'When it is safe to pull off the road',
        ],
        correctAnswer: 'When it is safe to pull off the road',
        explanation: 'The rider should first maintain control, then leave the roadway at a safe location to inspect or repair any damage.',
        source: 'Illinois Motorcycle Operator Manual — Flying Objects',
    },
    {
        id: 403,
        category: 'flying objects',
        question: 'A rider’s face shield becomes smeared after being struck by an insect. What is the rider’s immediate priority?',
        options: [
            'Maintaining control while continuing to watch the road',
            'Cleaning the shield while riding',
            'Looking down to inspect the motorcycle',
            'Making an immediate U-turn',
        ],
        correctAnswer: 'Maintaining control while continuing to watch the road',
        explanation: 'A smeared face shield is distracting, but the rider must continue steering and observing traffic until pulling over safely.',
        source: 'Illinois Motorcycle Operator Manual — Flying Objects',
    },
    {
        id: 404,
        category: 'flying objects',
        question: 'Which combination best describes the proper reaction to being struck by a flying object?',
        options: [
            'Brake sharply and remove the helmet',
            'Close your eyes and steer toward the shoulder',
            'Keep looking at the road, retain both hands on the handlebars, and pull over when safe',
            'Accelerate until the object falls away',
        ],
        correctAnswer: 'Keep looking at the road, retain both hands on the handlebars, and pull over when safe',
        explanation: 'This response preserves control during the immediate danger and allows the rider to address the damage after safely leaving traffic.',
        source: 'Illinois Motorcycle Operator Manual — Flying Objects',
    },
    {
        id: 405,
        category: 'getting off the road',
        question: 'Before turning onto the roadside, what should a motorcyclist check?',
        options: [
            'Whether another rider is nearby',
            'Whether the roadside surface is firm enough to ride on',
            'Whether the motorcycle’s high beam is on',
            'Whether the speedometer is accurate',
        ],
        correctAnswer: 'Whether the roadside surface is firm enough to ride on',
        explanation: 'A soft or unstable shoulder may cause the tires to slip or sink. The rider should examine the roadside before leaving the pavement.',
        source: 'Illinois Motorcycle Operator Manual — Getting Off the Road',
    },
    {
        id: 406,
        category: 'getting off the road',
        question: 'What should a rider do before turning onto soft grass, loose sand, or an uncertain roadside surface?',
        options: [
            'Accelerate before leaving the pavement',
            'Apply only the front brake during the turn',
            'Stand on the footrests and maintain speed',
            'Slow down before turning onto it',
        ],
        correctAnswer: 'Slow down before turning onto it',
        explanation: 'Braking or making sudden changes after reaching grass or sand may cause a loss of traction. The motorcycle should be slowed while it is still on the firmer roadway.',
        source: 'Illinois Motorcycle Operator Manual — Getting Off the Road',
    },
    {
        id: 407,
        category: 'getting off the road',
        question: 'Why should a motorcyclist signal clearly before pulling off the road?',
        options: [
            'Drivers behind may not expect the motorcycle to slow down and change direction',
            'The signal makes the roadside surface firmer',
            'It prevents the motorcycle from leaning',
            'It warns animals to leave the shoulder',
        ],
        correctAnswer: 'Drivers behind may not expect the motorcycle to slow down and change direction',
        explanation: 'A clear signal gives following drivers time to recognize the rider’s intentions and react safely.',
        source: 'Illinois Motorcycle Operator Manual — Getting Off the Road',
    },
    {
        id: 408,
        category: 'getting off the road',
        question: 'In addition to signaling, what checks should a motorcyclist make before slowing and leaving the roadway?',
        options: [
            'Check only the speedometer',
            'Look down at the side stand',
            'Check the mirror and perform a head check',
            'Turn around and watch traffic continuously',
        ],
        correctAnswer: 'Check the mirror and perform a head check',
        explanation: 'Mirrors do not reveal every vehicle in the rider’s blind spots. A head check confirms that the intended path is clear before leaving the road.',
        source: 'Illinois Motorcycle Operator Manual — Getting Off the Road',
    },
    {
        id: 409,
        category: 'getting off the road',
        question: 'After safely leaving the travel lane, how far off the road should the motorcyclist move?',
        options: [
            'Only far enough for the tires to cross the edge line',
            'As far off the road as possible',
            'Directly beside the edge of the active lane',
            'Into the nearest intersection',
        ],
        correctAnswer: 'As far off the road as possible',
        explanation: 'Greater separation from moving traffic reduces the risk of the motorcycle or rider being struck.',
        source: 'Illinois Motorcycle Operator Manual — Getting Off the Road',
    },
    {
        id: 410,
        category: 'getting off the road',
        question: 'Why should a stopped motorcycle be positioned as far from the road as possible?',
        options: [
            'Motorcycles become easier to start on grass',
            'Passing traffic will automatically slow down',
            'The motorcycle’s lights work better away from pavement',
            'A motorcycle beside the road may be difficult for other drivers to see',
        ],
        correctAnswer: 'A motorcycle beside the road may be difficult for other drivers to see',
        explanation: 'Motorcycles have a small profile and can easily be overlooked. Another driver might also attempt to pull off at the same location.',
        source: 'Illinois Motorcycle Operator Manual — Getting Off the Road',
    },
    {
        id: 411,
        category: 'getting off the road',
        question: 'Why must a rider park carefully on a loose or sloped shoulder?',
        options: [
            'The side or center stand may be difficult to set securely',
            'The horn may stop operating',
            'The throttle may become stuck',
            'The headlight may become brighter',
        ],
        correctAnswer: 'The side or center stand may be difficult to set securely',
        explanation: 'Loose ground may allow the stand to sink, while a slope may prevent the motorcycle from remaining balanced.',
        source: 'Illinois Motorcycle Operator Manual — Getting Off the Road',
    },
    {
        id: 412,
        category: 'getting off the road',
        question: 'A rider needs to stop and rest beside the road. Which sequence best follows the manual’s guidance?',
        options: [
            'Turn suddenly, signal afterward, and park near traffic',
            'Stop in the lane, inspect the shoulder, and then signal',
            'Check the roadside, signal and check traffic, pull well off the road, and park carefully',
            'Accelerate onto the shoulder and brake after completing the turn',
        ],
        correctAnswer: 'Check the roadside, signal and check traffic, pull well off the road, and park carefully',
        explanation: 'This sequence addresses surface conditions, surrounding traffic, visibility, and the motorcycle’s stability after stopping.',
        source: 'Illinois Motorcycle Operator Manual — Getting Off the Road',
    },
    {
        id: 413,
        category: 'getting off the road',
        question: 'A rider is unsure whether a sandy shoulder is firm enough to support the motorcycle. What should the rider do?',
        options: [
            'Maintain highway speed while entering it',
            'Slow down before turning onto the shoulder',
            'Brake hard only after reaching the sand',
            'Turn sharply without checking traffic',
        ],
        correctAnswer: 'Slow down before turning onto the shoulder',
        explanation: 'An uncertain shoulder should be treated like soft grass or loose sand. Reducing speed before entering it allows the rider to maintain better control.',
        source: 'Illinois Motorcycle Operator Manual — Getting Off the Road',
    },
    {
        id: 414,
        category: 'getting off the road',
        question: 'Which statement best summarizes a safe roadside stop?',
        options: [
            'Stop partly in the lane so other drivers can see the motorcycle',
            'Enter the shoulder quickly before traffic catches up',
            'Ignore the shoulder’s slope if the motorcycle has a center stand',
            'Confirm the surface is usable, warn and check traffic, move well off the road, and park securely',
        ],
        correctAnswer: 'Confirm the surface is usable, warn and check traffic, move well off the road, and park securely',
        explanation: 'A safe roadside stop requires the rider to consider the shoulder’s condition, communicate with traffic, create adequate separation, and stabilize the parked motorcycle.',
        source: 'Illinois Motorcycle Operator Manual — Getting Off the Road',
    },
    {
        id: 415,
        category: 'general safety and equipment',
        question: 'According to the motorcycle manual, who should carry passengers or large loads?',
        options: [
            'Experienced riders',
            'Riders with less than one year of experience',
            'Anyone who owns protective equipment',
            'Only professional delivery riders',
        ],
        correctAnswer: 'Experienced riders',
        explanation: 'Carrying a passenger or large load changes the motorcycle’s handling and requires skills that inexperienced riders may not yet have developed.',
        source: 'Illinois Motorcycle Operator Manual — General Safety and Equipment',
    },
    {
        id: 416,
        category: 'general safety and equipment',
        question: 'Why does carrying a passenger or heavy cargo require additional preparation?',
        options: [
            'Extra weight improves every part of motorcycle handling',
            'Passengers prevent the motorcycle from leaning',
            'Extra weight changes handling, balance, acceleration, and stopping',
            'Cargo automatically increases tire traction',
        ],
        correctAnswer: 'Extra weight changes handling, balance, acceleration, and stopping',
        explanation: 'Added weight makes the motorcycle respond differently. The rider must account for slower acceleration, longer stopping, and altered balance.',
        source: 'Illinois Motorcycle Operator Manual — General Safety and Equipment',
    },
    {
        id: 417,
        category: 'general safety and equipment',
        question: 'Before carrying a passenger or heavy load in street traffic, where should a rider practice?',
        options: [
            'On a crowded expressway',
            'Away from traffic',
            'In the center of an intersection',
            'On the narrowest available road',
        ],
        correctAnswer: 'Away from traffic',
        explanation: 'The rider should learn how the loaded motorcycle responds in a controlled area before entering street traffic.',
        source: 'Illinois Motorcycle Operator Manual — General Safety and Equipment',
    },
    {
        id: 418,
        category: 'general safety and equipment',
        question: 'Which combination describes the basic preparations for carrying a passenger?',
        options: [
            'Increase speed, lower tire pressure, and remove the mirrors',
            'Install a backrest, ride normally, and let the passenger learn while moving',
            'Move the rider forward, loosen the suspension, and reduce following distance',
            'Equip and adjust the motorcycle, instruct the passenger, and change riding technique',
        ],
        correctAnswer: 'Equip and adjust the motorcycle, instruct the passenger, and change riding technique',
        explanation: 'Safe passenger riding involves preparing the motorcycle, preparing the passenger, and adapting how the motorcycle is operated.',
        source: 'Illinois Motorcycle Operator Manual — General Safety and Equipment',
    },
    {
        id: 419,
        category: 'general safety and equipment',
        question: 'What type of seat is needed when carrying a motorcycle passenger?',
        options: [
            'One large enough for both people without crowding',
            'One that forces the rider against the fuel tank',
            'One that places the passenger behind the rear axle',
            'One intended only for the motorcycle operator',
        ],
        correctAnswer: 'One large enough for both people without crowding',
        explanation: 'A proper seat gives both people sufficient room and prevents the passenger from forcing the rider out of the normal riding position.',
        source: 'Illinois Motorcycle Operator Manual — General Safety and Equipment',
    },
    {
        id: 420,
        category: 'general safety and equipment',
        question: 'How far forward should the operator sit when carrying a passenger?',
        options: [
            'Against the handlebars',
            'Farther forward than the manufacturer allows',
            'No farther forward than the operator normally sits',
            'Directly over the front wheel',
        ],
        correctAnswer: 'No farther forward than the operator normally sits',
        explanation: 'The rider should maintain their usual position. Being pushed too far forward could interfere with comfortable and effective motorcycle control.',
        source: 'Illinois Motorcycle Operator Manual — General Safety and Equipment',
    },
    {
        id: 421,
        category: 'general safety and equipment',
        question: 'Why must a motorcycle passenger have proper footrests?',
        options: [
            'They allow the passenger to control the rear brake',
            'Firm footing helps prevent the passenger from falling and pulling the rider off',
            'They allow the passenger to steer during turns',
            'They replace the need for protective footwear',
        ],
        correctAnswer: 'Firm footing helps prevent the passenger from falling and pulling the rider off',
        explanation: 'Passenger footrests provide stability. A passenger who loses footing may disturb the motorcycle’s balance and pull the operator with them.',
        source: 'Illinois Motorcycle Operator Manual — General Safety and Equipment',
    },
    {
        id: 422,
        category: 'general safety and equipment',
        question: 'What protective equipment should a motorcycle passenger wear?',
        options: [
            'Only gloves and shoes',
            'Less equipment than the operator',
            'Protective equipment only during highway riding',
            'The same protective equipment recommended for motorcycle operators',
        ],
        correctAnswer: 'The same protective equipment recommended for motorcycle operators',
        explanation: 'Passengers face the same crash, weather, and flying-object hazards as operators and therefore need equivalent protection.',
        source: 'Illinois Motorcycle Operator Manual — General Safety and Equipment',
    },
    {
        id: 423,
        category: 'general safety and equipment',
        question: 'What motorcycle component may need adjustment to support a passenger’s added weight?',
        options: [
            'The suspension',
            'The horn',
            'The engine cut-off switch',
            'The turn-signal switch',
        ],
        correctAnswer: 'The suspension',
        explanation: 'The suspension should be adjusted to handle the passenger’s additional weight and preserve proper motorcycle handling.',
        source: 'Illinois Motorcycle Operator Manual — General Safety and Equipment',
    },
    {
        id: 424,
        category: 'general safety and equipment',
        question: 'When carrying a passenger, what tire adjustment might be necessary?',
        options: [
            'Removing several pounds of pressure',
            'Making both tires completely equal regardless of specifications',
            'Adding a few pounds of pressure according to the owner’s manual',
            'Inflating the tires to their maximum possible pressure',
        ],
        correctAnswer: 'Adding a few pounds of pressure according to the owner’s manual',
        explanation: 'Passenger weight may require additional tire pressure, but the correct setting should always come from the motorcycle’s owner’s manual.',
        source: 'Illinois Motorcycle Operator Manual — General Safety and Equipment',
    },
    {
        id: 425,
        category: 'general safety and equipment',
        question: 'When should the motorcycle’s mirrors and headlight be adjusted for a passenger?',
        options: [
            'Before the passenger sits on the motorcycle',
            'While the passenger is seated on the motorcycle',
            'Only after completing the trip',
            'While the motorcycle is traveling at highway speed',
        ],
        correctAnswer: 'While the passenger is seated on the motorcycle',
        explanation: 'The adjustments should reflect the motorcycle’s actual loaded position rather than its angle while carrying only the operator.',
        source: 'Illinois Motorcycle Operator Manual — General Safety and Equipment',
    },
    {
        id: 426,
        category: 'general safety and equipment',
        question: 'Why should the passenger be seated while the rider adjusts the mirrors and headlight?',
        options: [
            'The passenger can hold the adjustment tools',
            'The engine must be warm before adjustments are made',
            'The passenger can identify mechanical problems',
            'The passenger’s weight changes the motorcycle’s angle',
        ],
        correctAnswer: 'The passenger’s weight changes the motorcycle’s angle',
        explanation: 'The changed angle can alter where the headlight points and what the operator can see in the mirrors.',
        source: 'Illinois Motorcycle Operator Manual — General Safety and Equipment',
    },
    {
        id: 427,
        category: 'instructing passengers',
        question: 'When should a rider give safety instructions to a motorcycle passenger?',
        options: [
            'Before starting the ride',
            'After entering traffic',
            'Only when the passenger asks',
            'After reaching highway speed',
        ],
        correctAnswer: 'Before starting the ride',
        explanation: 'Instructions must be given before moving so the passenger already understands how to behave during starts, stops, turns, and hazards.',
        source: 'Illinois Motorcycle Operator Manual — Instructing Passengers',
    },
    {
        id: 428,
        category: 'instructing passengers',
        question: 'Should an experienced motorcycle rider still receive passenger instructions before riding on someone else’s motorcycle?',
        options: [
            'No, because experienced riders know every motorcycle',
            'Only if the trip is longer than an hour',
            'Yes, complete instructions should still be provided',
            'Only when traveling at night',
        ],
        correctAnswer: 'Yes, complete instructions should still be provided',
        explanation: 'Even an experienced motorcyclist should be instructed because riding as a passenger involves different responsibilities.',
        source: 'Illinois Motorcycle Operator Manual — Instructing Passengers',
    },
    {
        id: 429,
        category: 'instructing passengers',
        question: 'When should a passenger get onto the motorcycle?',
        options: [
            'Before the rider approaches it',
            'After the engine has been started',
            'While the motorcycle is rolling slowly',
            'After the rider begins entering traffic',
        ],
        correctAnswer: 'After the engine has been started',
        explanation: 'The manual directs passengers to mount only after the rider starts the engine and is prepared to support the motorcycle.',
        source: 'Illinois Motorcycle Operator Manual — Instructing Passengers',
    },
    {
        id: 430,
        category: 'instructing passengers',
        question: 'Where should a motorcycle passenger sit?',
        options: [
            'As far back as the seat permits',
            'Directly over the rear tire',
            'Against the luggage behind the seat',
            'As far forward as possible without crowding the rider',
        ],
        correctAnswer: 'As far forward as possible without crowding the rider',
        explanation: 'Sitting forward keeps the passenger’s weight close to the motorcycle’s center while preserving the rider’s normal operating space.',
        source: 'Illinois Motorcycle Operator Manual — Instructing Passengers',
    },
    {
        id: 431,
        category: 'instructing passengers',
        question: 'Where should a passenger hold onto the operator?',
        options: [
            'Around the rider’s waist, hips, or belt',
            'Around the rider’s neck',
            'By the rider’s arms',
            'By the motorcycle’s mirrors',
        ],
        correctAnswer: 'Around the rider’s waist, hips, or belt',
        explanation: 'Holding firmly in one of these locations helps the passenger remain stable without interfering with the rider’s arms or controls.',
        source: 'Illinois Motorcycle Operator Manual — Instructing Passengers',
    },
    {
        id: 432,
        category: 'instructing passengers',
        question: 'What should a motorcycle passenger do with both feet when the motorcycle is stopped temporarily?',
        options: [
            'Place both feet on the pavement',
            'Put one foot down and keep the other raised',
            'Keep both feet on the passenger footrests',
            'Rest both feet against the muffler',
        ],
        correctAnswer: 'Keep both feet on the passenger footrests',
        explanation: 'The passenger should keep both feet on the footrests even when stopped. Putting a foot down could disturb the motorcycle’s balance.',
        source: 'Illinois Motorcycle Operator Manual — Instructing Passengers',
    },
    {
        id: 433,
        category: 'instructing passengers',
        question: 'Why should a passenger keep their legs away from the motorcycle’s mufflers, chain, and moving parts?',
        options: [
            'Contact could change the motorcycle’s fuel mixture',
            'These components can burn, injure, or catch the passenger',
            'The passenger’s legs could block the headlight',
            'Contact would automatically stop the engine',
        ],
        correctAnswer: 'These components can burn, injure, or catch the passenger',
        explanation: 'Mufflers become extremely hot, while chains and other moving parts can trap clothing or cause serious injuries.',
        source: 'Illinois Motorcycle Operator Manual — Instructing Passengers',
    },
    {
        id: 434,
        category: 'instructing passengers',
        question: 'How should a passenger position their body while the motorcycle is moving?',
        options: [
            'Lean in the opposite direction from the rider',
            'Move from side to side to help balance',
            'Remain upright during every turn',
            'Stay directly behind the rider and lean as the rider leans',
        ],
        correctAnswer: 'Stay directly behind the rider and lean as the rider leans',
        explanation: 'Following the rider’s lean keeps the motorcycle balanced and prevents the passenger from fighting the motorcycle’s movement through a turn.',
        source: 'Illinois Motorcycle Operator Manual — Instructing Passengers',
    },
    {
        id: 435,
        category: 'instructing passengers',
        question: 'What should a passenger avoid while the motorcycle is moving?',
        options: [
            'Unnecessary talking or movement',
            'Looking ahead',
            'Holding the rider’s waist',
            'Keeping both feet on the footrests',
        ],
        correctAnswer: 'Unnecessary talking or movement',
        explanation: 'Unexpected motion can shift the motorcycle’s balance, while unnecessary conversation may distract the operator.',
        source: 'Illinois Motorcycle Operator Manual — Instructing Passengers',
    },
    {
        id: 436,
        category: 'instructing passengers',
        question: 'When approaching a rough or hazardous road surface, what should the passenger do?',
        options: [
            'Release their hold and sit upright',
            'Place both feet near the pavement',
            'Tighten their hold on the rider',
            'Lean away from the rider',
        ],
        correctAnswer: 'Tighten their hold on the rider',
        explanation: 'A surface problem can make the motorcycle bounce or change direction, so a firm hold helps the passenger remain stable.',
        source: 'Illinois Motorcycle Operator Manual — Instructing Passengers',
    },
    {
        id: 437,
        category: 'instructing passengers',
        question: 'When should a motorcycle passenger tighten their hold before the motorcycle begins moving?',
        options: [
            'After the motorcycle reaches cruising speed',
            'When the rider is about to start from a stop',
            'Only after the passenger becomes uncomfortable',
            'When the rider is parking the motorcycle',
        ],
        correctAnswer: 'When the rider is about to start from a stop',
        explanation: 'Acceleration can move the passenger backward unexpectedly. Tightening their hold prepares them for that movement.',
        source: 'Illinois Motorcycle Operator Manual — Instructing Passengers',
    },
    {
        id: 438,
        category: 'instructing passengers',
        question: 'What should a passenger do when the rider warns that a sudden maneuver will be necessary?',
        options: [
            'Release the rider and hold the seat',
            'Move as far backward as possible',
            'Put both feet down immediately',
            'Tighten their hold on the rider',
        ],
        correctAnswer: 'Tighten their hold on the rider',
        explanation: 'A firm hold helps the passenger remain aligned with the operator during a sudden maneuver.',
        source: 'Illinois Motorcycle Operator Manual — Instructing Passengers',
    },
    {
        id: 439,
        category: 'riding with passengers',
        question: 'How does a motorcycle generally respond with a passenger aboard?',
        options: [
            'More slowly',
            'More quickly',
            'Exactly as it does without a passenger',
            'Unpredictably at every speed',
        ],
        correctAnswer: 'More slowly',
        explanation: 'The added weight causes the motorcycle to react more slowly to acceleration, braking, and changes in direction.',
        source: 'Illinois Motorcycle Operator Manual — Riding With Passengers',
    },
    {
        id: 440,
        category: 'riding with passengers',
        question: 'How does a heavier passenger affect acceleration and stopping?',
        options: [
            'Acceleration becomes faster and stopping distance decreases',
            'Weight makes no difference on a light motorcycle',
            'It takes longer to speed up and slow down',
            'Only steering is affected',
        ],
        correctAnswer: 'It takes longer to speed up and slow down',
        explanation: 'A heavier total load requires more time and distance for the motorcycle to gain or lose speed.',
        source: 'Illinois Motorcycle Operator Manual — Riding With Passengers',
    },
    {
        id: 441,
        category: 'riding with passengers',
        question: 'On what type of motorcycle may a passenger’s weight have an especially noticeable effect?',
        options: [
            'A motorcycle with a windshield',
            'A light motorcycle',
            'A motorcycle with saddlebags',
            'A motorcycle with a large headlight',
        ],
        correctAnswer: 'A light motorcycle',
        explanation: 'The passenger’s weight represents a larger portion of the total weight on a light motorcycle, making its effects more noticeable.',
        source: 'Illinois Motorcycle Operator Manual — Riding With Passengers',
    },
    {
        id: 442,
        category: 'riding with passengers',
        question: 'How should a motorcyclist adjust speed when carrying a passenger through curves, corners, or over bumps?',
        options: [
            'Ride faster to improve balance',
            'Maintain the same speed used when riding alone',
            'Accelerate before every bump',
            'Ride more slowly',
        ],
        correctAnswer: 'Ride more slowly',
        explanation: 'Slower speeds provide additional control when the motorcycle’s balance and suspension are affected by a passenger.',
        source: 'Illinois Motorcycle Operator Manual — Riding With Passengers',
    },
    {
        id: 443,
        category: 'riding with passengers',
        question: 'When carrying a passenger and approaching a stop, what should the rider do?',
        options: [
            'Begin slowing earlier',
            'Wait longer before braking',
            'Use only the rear brake',
            'Shift into neutral immediately',
        ],
        correctAnswer: 'Begin slowing earlier',
        explanation: 'The additional weight increases the time and distance needed to stop, so braking should begin sooner.',
        source: 'Illinois Motorcycle Operator Manual — Riding With Passengers',
    },
    {
        id: 444,
        category: 'riding with passengers',
        question: 'How should the rider’s space cushion change when carrying a passenger?',
        options: [
            'It should become smaller on both sides',
            'Only the rear space cushion should increase',
            'More space should be maintained ahead and to the sides',
            'No adjustment is necessary',
        ],
        correctAnswer: 'More space should be maintained ahead and to the sides',
        explanation: 'A larger space cushion gives the more slowly responding motorcycle additional room to stop or avoid a hazard.',
        source: 'Illinois Motorcycle Operator Manual — Riding With Passengers',
    },
    {
        id: 445,
        category: 'riding with passengers',
        question: 'Why should a motorcyclist wait for larger gaps when crossing, entering, or merging into traffic with a passenger?',
        options: [
            'Passengers cannot travel through intersections',
            'The motorcycle accelerates and responds more slowly',
            'The passenger must signal to other drivers',
            'The motorcycle becomes wider than a car',
        ],
        correctAnswer: 'The motorcycle accelerates and responds more slowly',
        explanation: 'A larger opening gives the loaded motorcycle enough time to enter traffic without forcing other vehicles to slow down.',
        source: 'Illinois Motorcycle Operator Manual — Riding With Passengers',
    },
    {
        id: 446,
        category: 'riding with passengers',
        question: 'What physical ability must a passenger have while the motorcycle is moving?',
        options: [
            'The ability to reach the handlebars',
            'The ability to place both feet on the pavement',
            'The ability to operate the rear brake',
            'The ability to rest a foot on the passenger footrest',
        ],
        correctAnswer: 'The ability to rest a foot on the passenger footrest',
        explanation: 'The passenger must be able to use the provided footrests while the motorcycle is moving to maintain secure footing.',
        source: 'Illinois Motorcycle Operator Manual — Riding With Passengers',
    },
    {
        id: 447,
        category: 'riding with passengers',
        question: 'A rider is carrying a heavy passenger on a lightweight motorcycle. What should the rider expect?',
        options: [
            'Longer acceleration and stopping times',
            'Faster acceleration and shorter stopping times',
            'No change in motorcycle performance',
            'Improved cornering at higher speeds',
        ],
        correctAnswer: 'Longer acceleration and stopping times',
        explanation: 'The effect of a heavy passenger is especially noticeable on a lightweight motorcycle because of the increased total weight.',
        source: 'Illinois Motorcycle Operator Manual — Riding With Passengers',
    },
    {
        id: 448,
        category: 'riding with passengers',
        question: 'Which riding plan is safest when approaching a curve with a passenger aboard?',
        options: [
            'Enter faster because the added weight improves traction',
            'Brake suddenly in the middle of the curve',
            'Reduce speed and allow additional space',
            'Have the passenger lean opposite the rider',
        ],
        correctAnswer: 'Reduce speed and allow additional space',
        explanation: 'Slower cornering and a larger cushion compensate for the motorcycle’s altered balance and slower response.',
        source: 'Illinois Motorcycle Operator Manual — Riding With Passengers',
    },
    {
        id: 449,
        category: 'riding with passengers',
        question: 'A rider carrying a passenger needs to merge into fast-moving traffic. What should the rider do?',
        options: [
            'Accept the first gap regardless of size',
            'Wait for a larger opening than would normally be needed',
            'Enter slowly and force traffic to brake',
            'Have the passenger wave traffic away',
        ],
        correctAnswer: 'Wait for a larger opening than would normally be needed',
        explanation: 'Because the motorcycle accelerates more slowly with a passenger, it requires additional time to merge safely.',
        source: 'Illinois Motorcycle Operator Manual — Riding With Passengers',
    },
    {
        id: 450,
        category: 'riding with passengers',
        question: 'Which group of adjustments best accounts for the added weight of a passenger?',
        options: [
            'Faster curves, later braking, and smaller gaps',
            'Normal speed, normal spacing, and sharper steering',
            'Higher speed, earlier acceleration, and closer following',
            'Slower riding, earlier braking, larger cushions, and larger traffic gaps',
        ],
        correctAnswer: 'Slower riding, earlier braking, larger cushions, and larger traffic gaps',
        explanation: 'All four adjustments account for the motorcycle’s slower response and longer acceleration and stopping times.',
        source: 'Illinois Motorcycle Operator Manual — Riding With Passengers',
    },
    {
        id: 451,
        category: 'carrying loads',
        question: 'How much cargo are most motorcycles designed to carry?',
        options: [
            'Relatively little cargo',
            'As much cargo as a passenger car',
            'Any amount that fits on the seat',
            'Unlimited cargo when using bungee cords',
        ],
        correctAnswer: 'Relatively little cargo',
        explanation: 'Most motorcycles have limited cargo capacity and are not designed to carry large or heavy loads.',
        source: 'Illinois Motorcycle Operator Manual — Carrying Loads',
    },
    {
        id: 452,
        category: 'carrying loads',
        question: 'Under what conditions can a small load generally be carried safely on a motorcycle?',
        options: [
            'When it is stacked above the rider’s shoulders',
            'When it is held by the passenger',
            'When it is positioned and fastened properly',
            'When it is placed behind the rear axle',
        ],
        correctAnswer: 'When it is positioned and fastened properly',
        explanation: 'A small load can be transported safely when its location preserves balance and it is secured against shifting or falling.',
        source: 'Illinois Motorcycle Operator Manual — Carrying Loads',
    },
    {
        id: 453,
        category: 'carrying loads',
        question: 'Where should motorcycle cargo generally be positioned vertically?',
        options: [
            'As high as possible for visibility',
            'Low on the motorcycle',
            'Level with the rider’s shoulders',
            'Above the passenger seat',
        ],
        correctAnswer: 'Low on the motorcycle',
        explanation: 'Keeping cargo low helps prevent the motorcycle’s center of gravity from rising and disturbing its balance.',
        source: 'Illinois Motorcycle Operator Manual — Carrying Loads',
    },
    {
        id: 454,
        category: 'carrying loads',
        question: 'Why should cargo not be piled against a sissy bar or frame at the back of the seat?',
        options: [
            'It lowers the motorcycle’s center of gravity too much',
            'It increases front-tire traction',
            'It prevents the motorcycle from accelerating',
            'It raises the center of gravity and disturbs balance',
        ],
        correctAnswer: 'It raises the center of gravity and disturbs balance',
        explanation: 'Cargo stacked against a sissy bar or rear frame sits high, making the motorcycle less stable and harder to control.',
        source: 'Illinois Motorcycle Operator Manual — Carrying Loads',
    },
    {
        id: 455,
        category: 'carrying loads',
        question: 'Where should a motorcycle load generally be positioned in relation to the rear axle?',
        options: [
            'Over or in front of the rear axle',
            'Several feet behind the rear axle',
            'Directly above the taillight',
            'Hanging from the rear fender',
        ],
        correctAnswer: 'Over or in front of the rear axle',
        explanation: 'Keeping cargo forward reduces its negative effects on steering, braking, and motorcycle stability.',
        source: 'Illinois Motorcycle Operator Manual — Carrying Loads',
    },
    {
        id: 456,
        category: 'carrying loads',
        question: 'What is one advantage of using a tank bag for cargo?',
        options: [
            'It keeps the load behind the rear axle',
            'It raises the motorcycle’s center of gravity',
            'It helps keep the load forward',
            'It eliminates the need to secure the load',
        ],
        correctAnswer: 'It helps keep the load forward',
        explanation: 'A tank bag places cargo toward the motorcycle’s center instead of behind the rear axle.',
        source: 'Illinois Motorcycle Operator Manual — Carrying Loads',
    },
    {
        id: 457,
        category: 'carrying loads',
        question: 'What must a rider check when placing hard or sharp objects in a tank bag?',
        options: [
            'That the objects touch the handlebars',
            'That the bag and its contents do not interfere with the handlebars or controls',
            'That the objects are heavier than the rear cargo',
            'That the bag blocks the instrument panel completely',
        ],
        correctAnswer: 'That the bag and its contents do not interfere with the handlebars or controls',
        explanation: 'Hard or sharp objects must be positioned carefully so they do not block steering or prevent the operator from using the controls.',
        source: 'Illinois Motorcycle Operator Manual — Carrying Loads',
    },
    {
        id: 458,
        category: 'carrying loads',
        question: 'What can happen when cargo is mounted behind the motorcycle’s rear axle?',
        options: [
            'The motorcycle becomes easier to turn and stop',
            'The front brake becomes unnecessary',
            'The motorcycle’s center of gravity moves lower',
            'Turning and braking can be affected, and a wobble may develop',
        ],
        correctAnswer: 'Turning and braking can be affected, and a wobble may develop',
        explanation: 'Cargo behind the rear axle changes weight distribution and can make the motorcycle unstable.',
        source: 'Illinois Motorcycle Operator Manual — Carrying Loads',
    },
    {
        id: 459,
        category: 'carrying loads',
        question: 'How should the weight in a motorcycle’s saddlebags be distributed?',
        options: [
            'With approximately equal weight on both sides',
            'With all heavy objects on the left',
            'With all heavy objects on the right',
            'According to which direction the rider plans to turn',
        ],
        correctAnswer: 'With approximately equal weight on both sides',
        explanation: 'Balanced saddlebags preserve even weight distribution and help the motorcycle travel straight.',
        source: 'Illinois Motorcycle Operator Manual — Carrying Loads',
    },
    {
        id: 460,
        category: 'carrying loads',
        question: 'What may happen if saddlebags are loaded unevenly?',
        options: [
            'The engine may immediately seize',
            'The motorcycle may become unable to shift gears',
            'The motorcycle may drift toward one side',
            'The headlight may stop working',
        ],
        correctAnswer: 'The motorcycle may drift toward one side',
        explanation: 'Uneven cargo places more weight on one side, causing the motorcycle to pull or drift in that direction.',
        source: 'Illinois Motorcycle Operator Manual — Carrying Loads',
    },
    {
        id: 461,
        category: 'carrying loads',
        question: 'What is a recommended method for securing cargo to a motorcycle?',
        options: [
            'Holding the cargo with one hand',
            'Using properly fastened bungee cords or cargo nets',
            'Resting it loosely against the passenger seat',
            'Allowing the passenger to balance it',
        ],
        correctAnswer: 'Using properly fastened bungee cords or cargo nets',
        explanation: 'Bungee cords and cargo nets hold cargo tightly. Elastic cords with multiple attachment points on each side provide greater security than a single connection.',
        source: 'Illinois Motorcycle Operator Manual — Carrying Loads',
    },
    {
        id: 462,
        category: 'carrying loads',
        question: 'Why should a rider stop periodically to inspect motorcycle cargo?',
        options: [
            'To move the cargo farther behind the rear axle',
            'To loosen tight attachment points',
            'To make one saddlebag heavier than the other',
            'To confirm that the load has not worked loose',
        ],
        correctAnswer: 'To confirm that the load has not worked loose',
        explanation: 'Road vibration and movement can loosen cargo over time, so the rider should stop periodically and inspect it.',
        source: 'Illinois Motorcycle Operator Manual — Carrying Loads',
    },
    {
        id: 463,
        category: 'group riding',
        question: 'What should be the primary goal when motorcyclists ride as a group?',
        options: [
            'Promote safety without interfering with traffic',
            'Prevent other vehicles from passing',
            'Keep every motorcycle side by side',
            'Travel faster than surrounding traffic',
        ],
        correctAnswer: 'Promote safety without interfering with traffic',
        explanation: 'A group should ride in a way that keeps its members safe while still allowing normal traffic to move around it.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 464,
        category: 'group riding',
        question: 'Why are smaller motorcycle groups generally safer?',
        options: [
            'They eliminate the need for signals',
            'They can legally ignore red lights',
            'Other drivers can pass them more easily and safely',
            'Their riders can follow more closely',
        ],
        correctAnswer: 'Other drivers can pass them more easily and safely',
        explanation: 'Small groups occupy less roadway and are also less likely to become separated by traffic or red lights.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 465,
        category: 'group riding',
        question: 'What should riders do when a motorcycle group contains more than four or five riders?',
        options: [
            'Place every rider in one long formation',
            'Divide into two or more smaller groups',
            'Move the entire group into the left lane',
            'Pair riders alongside one another',
        ],
        correctAnswer: 'Divide into two or more smaller groups',
        explanation: 'The manual recommends splitting groups larger than four or five riders into smaller units.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 466,
        category: 'group riding',
        question: 'How should a motorcycle group’s leader prepare for changes in traffic conditions?',
        options: [
            'Wait until the last moment to signal',
            'Allow each rider to choose a different route',
            'Watch only the motorcycle directly behind',
            'Look ahead and signal early',
        ],
        correctAnswer: 'Look ahead and signal early',
        explanation: 'Early signals give everyone behind the leader enough time to recognize and follow upcoming changes.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 467,
        category: 'group riding',
        question: 'Why should a motorcycle group begin lane changes early?',
        options: [
            'To give the other group members time to follow',
            'To prevent faster traffic from passing',
            'To allow riders to travel beside one another',
            'To shorten the group’s following distance',
        ],
        correctAnswer: 'To give the other group members time to follow',
        explanation: 'Beginning a lane change early allows each rider to move safely instead of rushing to stay with the group.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 468,
        category: 'group riding',
        question: 'Where should inexperienced riders be positioned in a motorcycle group?',
        options: [
            'At the very back of the group',
            'Directly beside the group leader',
            'Just behind the group leader',
            'In front of the leader',
        ],
        correctAnswer: 'Just behind the group leader',
        explanation: 'This position allows beginners to follow the experienced leader while remaining visible to experienced riders behind them.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 469,
        category: 'group riding',
        question: 'Why are inexperienced riders placed near the front of a motorcycle group?',
        options: [
            'They can determine the group’s route',
            'More experienced riders can watch them from behind',
            'They can prevent vehicles from passing',
            'They can ride faster than the group',
        ],
        correctAnswer: 'More experienced riders can watch them from behind',
        explanation: 'Experienced riders can notice when a beginner is struggling and adjust the group’s pace accordingly.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 470,
        category: 'group riding',
        question: 'Who should set the pace for a motorcycle group?',
        options: [
            'The fastest rider',
            'The least experienced passenger',
            'The rider in the center',
            'The tailender',
        ],
        correctAnswer: 'The tailender',
        explanation: 'The group should match the pace of its last rider so nobody must speed or take risks to catch up.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 471,
        category: 'group riding',
        question: 'How should group riders monitor the person behind them?',
        options: [
            'Use their mirrors regularly',
            'Turn completely around while riding',
            'Ride directly alongside that person',
            'Stop at every intersection',
        ],
        correctAnswer: 'Use their mirrors regularly',
        explanation: 'Monitoring the rider behind helps the group recognize when someone is falling back.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 472,
        category: 'group riding',
        question: 'What should the group do if one rider begins falling behind?',
        options: [
            'Accelerate so the rider tries harder to catch up',
            'Leave that rider to find another route',
            'Slow down to remain with the tailender',
            'Stop immediately in the travel lane',
        ],
        correctAnswer: 'Slow down to remain with the tailender',
        explanation: 'The group should reduce its pace instead of encouraging the trailing rider to hurry dangerously.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 473,
        category: 'group riding',
        question: 'Why should every rider know the group’s planned route?',
        options: [
            'So separated riders do not need to hurry or risk getting lost',
            'So every rider can lead at the same time',
            'So riders can race to the destination',
            'So the group can ignore traffic signals',
        ],
        correctAnswer: 'So separated riders do not need to hurry or risk getting lost',
        explanation: 'Knowing the route allows a separated rider to continue safely without speeding to catch the group.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 474,
        category: 'group riding',
        question: 'What should a motorcycle group plan during a long ride?',
        options: [
            'Continuous riding without stopping',
            'Stops only when someone runs out of fuel',
            'A different route for every rider',
            'Frequent rest stops',
        ],
        correctAnswer: 'Frequent rest stops',
        explanation: 'Planned stops reduce fatigue and give the group opportunities to regroup during long rides.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 475,
        category: 'group riding',
        question: 'How should a group balance close formation with safety?',
        options: [
            'Maintain close ranks while preserving enough distance to react',
            'Ride with handlebars nearly touching',
            'Spread so far apart that riders cannot see one another',
            'Place two motorcycles beside each other in every lane position',
        ],
        correctAnswer: 'Maintain close ranks while preserving enough distance to react',
        explanation: 'The group can remain visible and organized without sacrificing the time and space each rider needs for hazards.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 476,
        category: 'group riding',
        question: 'What is one advantage of a properly formed close motorcycle group?',
        options: [
            'It prevents all cars from entering the roadway',
            'It allows riders to ignore following distances',
            'It is easier to see and less likely to become separated',
            'It eliminates the need for mirrors',
        ],
        correctAnswer: 'It is easier to see and less likely to become separated',
        explanation: 'A properly close group occupies less highway space and is more noticeable to other drivers.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 477,
        category: 'group riding',
        question: 'Why should two group riders never operate directly alongside each other?',
        options: [
            'One motorcycle will use more fuel',
            'Neither rider has room to avoid a hazard',
            'Their headlights may interfere with traffic signals',
            'The motorcycles will automatically drift together',
        ],
        correctAnswer: 'Neither rider has room to avoid a hazard',
        explanation: 'Riding directly alongside another motorcycle removes the escape path needed to avoid a vehicle or roadway obstacle.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 478,
        category: 'group riding',
        question: 'When should two motorcyclists in a group talk to each other?',
        options: [
            'While riding side by side',
            'While passing another vehicle',
            'While traveling through a curve',
            'After both motorcycles have stopped',
        ],
        correctAnswer: 'After both motorcycles have stopped',
        explanation: 'Riders should wait until they are stopped instead of riding dangerously side by side to talk.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 479,
        category: 'group riding',
        question: 'What formation generally keeps a motorcycle group close while maintaining an adequate space cushion?',
        options: [
            'A staggered formation',
            'A paired formation',
            'A random formation',
            'A single horizontal line',
        ],
        correctAnswer: 'A staggered formation',
        explanation: 'A staggered arrangement keeps the group compact while preserving space ahead, behind, and beside each motorcycle.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 480,
        category: 'group riding',
        question: 'In a staggered formation, where should the group leader ride?',
        options: [
            'In the center of the lane',
            'On the right shoulder',
            'On the left side of the lane',
            'Directly over the centerline',
        ],
        correctAnswer: 'On the left side of the lane',
        explanation: 'The leader takes the left lane position, establishing the alternating pattern used by the riders behind.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 481,
        category: 'group riding',
        question: 'In a staggered formation, where should the second rider be positioned?',
        options: [
            'Two seconds behind on the left',
            'One second behind on the right',
            'Directly beside the leader',
            'Three seconds behind in the center',
        ],
        correctAnswer: 'One second behind on the right',
        explanation: 'This creates a staggered position while providing space from the leader.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 482,
        category: 'group riding',
        question: 'In a staggered formation, where should the third rider be positioned?',
        options: [
            'One second behind the second rider on the right',
            'Directly beside the second rider',
            'Three seconds behind the leader in the center',
            'Two seconds behind the leader on the left',
        ],
        correctAnswer: 'Two seconds behind the leader on the left',
        explanation: 'The third rider uses the same lane position as the leader while maintaining a two-second following distance.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 483,
        category: 'group riding',
        question: 'In a staggered formation, what distance should the fourth rider maintain behind the second rider?',
        options: [
            'Two seconds',
            'One-half second',
            'Four seconds',
            'No following distance',
        ],
        correctAnswer: 'Two seconds',
        explanation: 'The fourth rider uses the right lane position and remains two seconds behind the second rider.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 484,
        category: 'group riding',
        question: 'How should riders in a staggered formation pass another vehicle?',
        options: [
            'As one tightly packed unit',
            'In pairs',
            'One rider at a time',
            'From both sides of the vehicle',
        ],
        correctAnswer: 'One rider at a time',
        explanation: 'Passing individually allows each rider to evaluate traffic and complete the maneuver safely.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 485,
        category: 'group riding',
        question: 'After the group leader passes a vehicle, what should the leader do?',
        options: [
            'Immediately slow below the passed vehicle’s speed',
            'Return to the left position and continue at passing speed to create room',
            'Move to the right position and signal the second rider to cut in',
            'Stop on the shoulder and wait',
        ],
        correctAnswer: 'Return to the left position and continue at passing speed to create room',
        explanation: 'The leader opens sufficient space ahead of the passed vehicle for the next group member.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 486,
        category: 'group riding',
        question: 'When should a motorcycle group generally change from staggered formation to single file?',
        options: [
            'Only while stopped at a traffic light',
            'Whenever another vehicle approaches from behind',
            'While traveling on a straight, open highway',
            'In curves, turns, and when entering or leaving a highway',
        ],
        correctAnswer: 'In curves, turns, and when entering or leaving a highway',
        explanation: 'Single file provides more room for each rider to select the safest path through these situations.',
        source: 'Illinois Motorcycle Operator Manual — Group Riding',
    },
    {
        id: 487,
        category: 'alcohol and other drugs',
        question: 'How much alcohol can significantly affect a motorcyclist’s performance?',
        options: [
            'As little as one drink',
            'At least three drinks',
            'Only enough to exceed a BAC of .08',
            'Only enough to cause visible intoxication',
        ],
        correctAnswer: 'As little as one drink',
        explanation: 'Even one alcoholic drink can reduce judgment, coordination, and overall riding performance.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 488,
        category: 'alcohol and other drugs',
        question: 'According to the manual, approximately how many riders killed in motorcycle crashes had been drinking?',
        options: [
            'One out of every ten',
            'One-fourth',
            'Nearly one-half',
            'Nearly all riders',
        ],
        correctAnswer: 'Nearly one-half',
        explanation: 'The manual states that nearly half of riders killed in motorcycle crashes had been drinking.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 489,
        category: 'alcohol and other drugs',
        question: 'Of the riders killed after drinking, approximately what fraction had a BAC above the illegal limit?',
        options: [
            'One-half',
            'One-third',
            'Two-thirds',
            'All of them',
        ],
        correctAnswer: 'One-third',
        explanation: 'Only about one-third of the riders who had been drinking were above the illegal BAC limit, showing that lower amounts still create danger.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 490,
        category: 'alcohol and other drugs',
        question: 'What does the number of alcohol-related motorcycle fatalities below the illegal BAC limit demonstrate?',
        options: [
            'Riding is safe whenever BAC is below .08',
            'Only physical coordination is affected by alcohol',
            'Food completely prevents alcohol impairment',
            'A few drinks can impair riding before the illegal limit is reached',
        ],
        correctAnswer: 'A few drinks can impair riding before the illegal limit is reached',
        explanation: 'Being below the legal limit does not mean someone can ride safely; impairment begins earlier.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 491,
        category: 'alcohol and other drugs',
        question: 'Which type of medication may impair a person’s ability to ride safely?',
        options: [
            'Prescription and nonprescription drugs',
            'Only medications requiring hospitalization',
            'Only illegal drugs',
            'Only injectable medications',
        ],
        correctAnswer: 'Prescription and nonprescription drugs',
        explanation: 'Antihistamines, cold remedies, pain relievers, mood-changing medications, and other drugs may interfere with safe riding.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 492,
        category: 'alcohol and other drugs',
        question: 'What does the manual say about mixing alcohol with other drugs?',
        options: [
            'It is safe when each amount is small',
            'It reduces the effects of alcohol',
            'Even small combined amounts can be very dangerous',
            'It affects only inexperienced riders',
        ],
        correctAnswer: 'Even small combined amounts can be very dangerous',
        explanation: 'Alcohol and another drug can intensify each other’s effects, creating greater impairment than either substance alone.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 493,
        category: 'alcohol and other drugs',
        question: 'What percentage of motorcycle crashes involving alcohol or drugs result in injuries, according to the manual?',
        options: [
            '33%',
            '90%',
            '50%',
            '10%',
        ],
        correctAnswer: '90%',
        explanation: 'According to the manual, injuries occur in approximately 90% of motorcycle crashes involving alcohol or drugs.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 494,
        category: 'alcohol and other drugs',
        question: 'When can alcohol begin affecting the judgment and decision-making needed to operate a motorcycle?',
        options: [
            'Only after the rider becomes visibly intoxicated',
            'Only after the rider exceeds a BAC of .08',
            'Only after the rider loses physical coordination',
            'Long before the illegal BAC limit is reached',
        ],
        correctAnswer: 'Long before the illegal BAC limit is reached',
        explanation: 'Judgment and decision-making can deteriorate before a rider reaches a BAC of .08.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 495,
        category: 'alcohol and other drugs',
        question: 'How quickly does alcohol enter the bloodstream and begin affecting the brain?',
        options: [
            'Within minutes',
            'After approximately two hours',
            'Only after being digested with food',
            'The following day',
        ],
        correctAnswer: 'Within minutes',
        explanation: 'Alcohol quickly enters the bloodstream, reaches the brain, and affects mental and physical functions.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 496,
        category: 'alcohol and other drugs',
        question: 'What does BAC measure?',
        options: [
            'The number of beverages purchased',
            'The rider’s physical tolerance',
            'The amount of alcohol relative to the blood in the body',
            'The amount of food consumed while drinking',
        ],
        correctAnswer: 'The amount of alcohol relative to the blood in the body',
        explanation: 'BAC stands for blood-alcohol concentration and measures the relationship between alcohol and blood.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 497,
        category: 'alcohol and other drugs',
        question: 'At approximately what rate can the body generally eliminate alcohol?',
        options: [
            'Two drinks per hour',
            'About one drink per hour',
            'Four drinks per hour',
            'One drink every ten minutes',
        ],
        correctAnswer: 'About one drink per hour',
        explanation: 'The body generally removes approximately one drink per hour, although individual factors can affect the actual rate.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 498,
        category: 'alcohol and other drugs',
        question: 'Which three factors play a major role in determining BAC?',
        options: [
            'Age, motorcycle size, and riding experience',
            'Gender, helmet type, and road conditions',
            'Food, weather, and time of day',
            'Alcohol consumed, drinking speed, and body weight',
        ],
        correctAnswer: 'Alcohol consumed, drinking speed, and body weight',
        explanation: 'These three factors have a major influence on how much alcohol accumulates in the bloodstream.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 499,
        category: 'alcohol and other drugs',
        question: 'Which additional factors may cause a person’s BAC to be higher?',
        options: [
            'Gender, physical condition, and food intake',
            'Motorcycle engine size and tire pressure',
            'Helmet style and protective clothing',
            'Road surface and traffic volume',
        ],
        correctAnswer: 'Gender, physical condition, and food intake',
        explanation: 'These additional individual factors may influence how alcohol affects someone and may result in a higher BAC.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 500,
        category: 'alcohol and other drugs',
        question: 'What may happen even when a person consumes alcohol at a rate of one drink per hour?',
        options: [
            'Alcohol cannot affect judgment',
            'The person becomes automatically safe to ride',
            'Alcohol may still accumulate in the body',
            'The person’s BAC must remain at zero',
        ],
        correctAnswer: 'Alcohol may still accumulate in the body',
        explanation: 'The one-drink-per-hour removal rate is only a general estimate, and one drink can still affect judgment and ability.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 501,
        category: 'alcohol and other drugs',
        question: 'Which servings generally contain equivalent amounts of alcohol?',
        options: [
            'A 24-ounce beer, two shots, and a full bottle of wine',
            'A 12-ounce beer, a 1.5-ounce shot, and a 5-ounce glass of wine',
            'A 6-ounce beer, a mixed drink, and two glasses of wine',
            'One beer, one bottle of liquor, and one bottle of wine',
        ],
        correctAnswer: 'A 12-ounce beer, a 1.5-ounce shot, and a 5-ounce glass of wine',
        explanation: 'Each standard serving contains approximately the same amount of alcohol despite differences in beverage type and volume.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 502,
        category: 'alcohol and other drugs',
        question: 'How does drinking more quickly affect the amount of alcohol in the body?',
        options: [
            'It allows alcohol to leave the body sooner',
            'It prevents alcohol from reaching the brain',
            'It makes body weight irrelevant',
            'It causes alcohol to accumulate more rapidly',
        ],
        correctAnswer: 'It causes alcohol to accumulate more rapidly',
        explanation: 'When alcohol is consumed faster than the body can eliminate it, the remaining amount in the bloodstream increases.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 503,
        category: 'alcohol and other drugs',
        question: 'If someone consumes two drinks in one hour, what is the least amount of alcohol likely remaining in the bloodstream at the end of that hour?',
        options: [
            'The equivalent of at least one drink',
            'No alcohol',
            'The equivalent of three drinks',
            'Exactly one-half of a drink',
        ],
        correctAnswer: 'The equivalent of at least one drink',
        explanation: 'The person consumed two drinks while the body generally eliminated only about one during that hour.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 504,
        category: 'alcohol and other drugs',
        question: 'If a person consumes eight drinks over four hours, approximately how many drinks remain in the body at minimum?',
        options: [
            'Two',
            'Eight',
            'Four',
            'None',
        ],
        correctAnswer: 'Four',
        explanation: 'Using the manual’s general formula, eight drinks minus four hours of elimination leaves at least four drinks in the body.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 505,
        category: 'alcohol and other drugs',
        question: 'If a person consumes seven drinks over three hours, approximately how many drinks remain in the body at minimum?',
        options: [
            'Three',
            'Four',
            'Seven',
            'One',
        ],
        correctAnswer: 'Four',
        explanation: 'Seven drinks minus approximately three drinks eliminated over three hours leaves at least four drinks remaining.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 506,
        category: 'alcohol and other drugs',
        question: 'Why might a larger person sometimes develop a lower alcohol concentration per drink than a smaller person?',
        options: [
            'Larger people eliminate alcohol instantly',
            'Alcohol cannot enter a larger person’s bloodstream',
            'Larger people always have greater alcohol tolerance',
            'They may have more blood and other bodily fluids',
        ],
        correctAnswer: 'They may have more blood and other bodily fluids',
        explanation: 'The alcohol may be distributed through a greater volume, but body size does not guarantee unimpaired riding.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 507,
        category: 'alcohol and other drugs',
        question: 'Why should a rider not rely on body size to determine whether riding is safe after drinking?',
        options: [
            'Individual differences exist, and judgment may be impaired below the illegal limit',
            'Body weight has no relationship to BAC',
            'Larger riders are legally prohibited from drinking',
            'Alcohol affects only smaller riders physically',
        ],
        correctAnswer: 'Individual differences exist, and judgment may be impaired below the illegal limit',
        explanation: 'A rider cannot safely assume that body size protects them from alcohol’s effects.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 508,
        category: 'alcohol and other drugs',
        question: 'At what BAC is a person legally considered under the influence in Illinois?',
        options: [
            '.02 or higher',
            '.05 or higher',
            '.08 or higher',
            '.10 or higher',
        ],
        correctAnswer: '.08 or higher',
        explanation: 'The manual identifies a BAC of .08 as one condition under which a person is legally considered under the influence in Illinois.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 509,
        category: 'alcohol and other drugs',
        question: 'What THC concentration in whole blood meets Illinois’ stated DUI threshold in the manual?',
        options: [
            '10 nanograms per milliliter',
            '5 nanograms per milliliter',
            '15 nanograms per milliliter',
            '20 nanograms per milliliter',
        ],
        correctAnswer: '5 nanograms per milliliter',
        explanation: 'The manual gives a threshold of 5 nanograms of THC per milliliter of whole blood. It lists 10 nanograms for other bodily substances.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 510,
        category: 'alcohol and other drugs',
        question: 'Besides alcohol or cannabis levels, what can cause a person to be considered under the influence?',
        options: [
            'Riding while hungry',
            'Taking any vitamin',
            'Riding without a windshield',
            'Using another controlled substance or being impaired by medication',
        ],
        correctAnswer: 'Using another controlled substance or being impaired by medication',
        explanation: 'DUI is not limited to alcohol or cannabis. Controlled substances and impairing medications can also qualify.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 511,
        category: 'alcohol and other drugs',
        question: 'Which is a possible consequence of a DUI conviction or related enforcement action?',
        options: [
            'Driver’s license suspension or revocation',
            'Free transportation during the suspension',
            'Automatic dismissal of other charges',
            'Removal of all court expenses',
        ],
        correctAnswer: 'Driver’s license suspension or revocation',
        explanation: 'DUI enforcement can result in mandatory license penalties, along with fines, community service, and other costs.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 512,
        category: 'alcohol and other drugs',
        question: 'What is a BAIID?',
        options: [
            'A special motorcycle license classification',
            'A roadside vision-testing device',
            'A breath-alcohol device required to start a vehicle',
            'A motorcycle passenger restraint',
        ],
        correctAnswer: 'A breath-alcohol device required to start a vehicle',
        explanation: 'A BAIID tests the driver’s breath and may prevent the vehicle from starting when alcohol is detected.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 513,
        category: 'alcohol and other drugs',
        question: 'What license consequence may follow refusal to submit to a breath test?',
        options: [
            'The rider receives only a written warning',
            'Mandatory suspension or revocation may occur',
            'The rider’s license is automatically upgraded',
            'There can be no license consequence without a conviction',
        ],
        correctAnswer: 'Mandatory suspension or revocation may occur',
        explanation: 'Refusing a breath test can carry a license penalty even apart from a later DUI conviction.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 514,
        category: 'alcohol and other drugs',
        question: 'Why are setting a drinking limit and pacing yourself considered poor alternatives to avoiding alcohol before riding?',
        options: [
            'Drinking slowly raises BAC faster',
            'Limits are illegal in Illinois',
            'Food makes pacing ineffective',
            'Alcohol weakens judgment, including the ability to recognize impairment',
        ],
        correctAnswer: 'Alcohol weakens judgment, including the ability to recognize impairment',
        explanation: 'Once drinking begins, a person may fail to follow their planned limit or recognize how badly their abilities have declined.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 515,
        category: 'alcohol and other drugs',
        question: 'What should a rider do after drinking instead of attempting to ride home?',
        options: [
            'Leave the motorcycle and arrange another way home',
            'Ride slowly using side streets',
            'Wait a few minutes and then ride',
            'Follow another motorcycle closely',
        ],
        correctAnswer: 'Leave the motorcycle and arrange another way home',
        explanation: 'Removing the option to ride prevents an impaired person from giving in to temptation or making a poor decision.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 516,
        category: 'alcohol and other drugs',
        question: 'Why should a person decide not to ride before beginning to drink?',
        options: [
            'Alcohol immediately prevents the motorcycle from starting',
            'The motorcycle becomes illegal after sunset',
            'Resistance and judgment become weaker after drinking begins',
            'Drinking prevents the rider from wearing a helmet',
        ],
        correctAnswer: 'Resistance and judgment become weaker after drinking begins',
        explanation: 'The safest decision should be made while the person is still sober enough to follow through responsibly.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 517,
        category: 'alcohol and other drugs',
        question: 'What should friends first try to arrange for someone who has consumed too much alcohol?',
        options: [
            'A faster motorcycle',
            'A safe alternative ride home',
            'A route with less traffic',
            'A riding partner who has also been drinking',
        ],
        correctAnswer: 'A safe alternative ride home',
        explanation: 'Friends can prevent an impaired ride by arranging transportation that does not require the person to operate the motorcycle.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 518,
        category: 'alcohol and other drugs',
        question: 'Which is an appropriate way to stop an impaired friend from riding?',
        options: [
            'Challenge the friend to prove they can ride',
            'Give the friend a stimulant and send them home',
            'Let the friend ride if they promise to travel slowly',
            'Keep them there, involve others, and explain the risk of harm or arrest',
        ],
        correctAnswer: 'Keep them there, involve others, and explain the risk of harm or arrest',
        explanation: 'Food, coffee, other activities, and group pressure may help delay or prevent the person from riding, but they do not instantly remove alcohol.',
        source: 'Illinois Motorcycle Operator Manual — Alcohol and Other Drugs',
    },
    {
        id: 519,
        category: 'fatigue',
        question: 'Compared with driving a car, how tiring is riding a motorcycle?',
        options: [
            'Motorcycle riding is generally more tiring',
            'Motorcycle riding is always less tiring',
            'Both require exactly the same effort',
            'Riding becomes tiring only at night',
        ],
        correctAnswer: 'Motorcycle riding is generally more tiring',
        explanation: 'Motorcycle operation requires greater physical involvement and exposure to weather than driving a car.',
        source: 'Illinois Motorcycle Operator Manual — Fatigue',
    },
    {
        id: 520,
        category: 'fatigue',
        question: 'Why should a motorcyclist avoid riding while tired?',
        options: [
            'Fatigue affects only passenger comfort',
            'Fatigue improves reaction time but reduces speed',
            'Fatigue can interfere with control of the motorcycle',
            'Fatigue affects car drivers but not motorcyclists',
        ],
        correctAnswer: 'Fatigue can interfere with control of the motorcycle',
        explanation: 'A tired rider may have difficulty concentrating, responding to hazards, and controlling the motorcycle accurately.',
        source: 'Illinois Motorcycle Operator Manual — Fatigue',
    },
    {
        id: 521,
        category: 'fatigue',
        question: 'Which weather conditions can cause a motorcyclist to become tired more quickly?',
        options: [
            'Warm temperatures and clear skies only',
            'Wind, cold, and rain',
            'Dry roads and light traffic',
            'Daylight and calm weather',
        ],
        correctAnswer: 'Wind, cold, and rain',
        explanation: 'Exposure to these conditions consumes energy and causes the rider to become tired more quickly.',
        source: 'Illinois Motorcycle Operator Manual — Fatigue',
    },
    {
        id: 522,
        category: 'fatigue',
        question: 'What equipment can reduce fatigue from the elements during long-distance riding?',
        options: [
            'A louder horn',
            'A smaller fuel tank',
            'Lower handlebars',
            'Warm clothing and a windshield',
        ],
        correctAnswer: 'Warm clothing and a windshield',
        explanation: 'Warm clothing reduces cold exposure, while a windshield helps protect the rider from exhausting wind and weather.',
        source: 'Illinois Motorcycle Operator Manual — Fatigue',
    },
    {
        id: 523,
        category: 'fatigue',
        question: 'According to the manual, how many hours per day do experienced riders seldom exceed?',
        options: [
            'Six hours',
            'Ten hours',
            'Twelve hours',
            'Sixteen hours',
        ],
        correctAnswer: 'Six hours',
        explanation: 'According to the manual, experienced riders seldom attempt to ride more than six hours in one day.',
        source: 'Illinois Motorcycle Operator Manual — Fatigue',
    },
    {
        id: 524,
        category: 'fatigue',
        question: 'During a long motorcycle trip, how often should a rider stop and get off the motorcycle?',
        options: [
            'Every six hours',
            'Only when refueling',
            'At least every two hours',
            'Once at the end of the trip',
        ],
        correctAnswer: 'At least every two hours',
        explanation: 'Frequent breaks allow the rider to get off the motorcycle, move around, and recover concentration.',
        source: 'Illinois Motorcycle Operator Manual — Fatigue',
    },
    {
        id: 525,
        category: 'fatigue',
        question: 'Why are artificial stimulants not a dependable solution for motorcycle fatigue?',
        options: [
            'They permanently reduce motorcycle control',
            'They may produce extreme fatigue or depression as they wear off',
            'They prevent the rider from feeling cold',
            'They make the motorcycle accelerate faster',
        ],
        correctAnswer: 'They may produce extreme fatigue or depression as they wear off',
        explanation: 'Artificial stimulation is temporary and can leave the rider less alert when its effects fade.',
        source: 'Illinois Motorcycle Operator Manual — Fatigue',
    },
    {
        id: 526,
        category: 'fatigue',
        question: 'What is the safest overall strategy for preventing fatigue-related riding problems?',
        options: [
            'Ride faster to shorten the trip',
            'Use stimulants instead of resting',
            'Avoid breaks so the trip ends sooner',
            'Dress for the weather, limit daily distance, rest frequently, and avoid alcohol and drugs',
        ],
        correctAnswer: 'Dress for the weather, limit daily distance, rest frequently, and avoid alcohol and drugs',
        explanation: 'This combined strategy addresses weather exposure, excessive riding time, physical exhaustion, and substance-related impairment.',
        source: 'Illinois Motorcycle Operator Manual — Fatigue',
    },
    {
        id: 527,
        category: 'rider skill test',
        question: 'What examinations must an applicant generally pass to earn an Illinois motorcycle license?',
        options: ['Both the motorcycle knowledge and skills tests', 'Only the motorcycle knowledge test', 'Only a standard automobile road test', 'A vision test and emissions inspection only'],
        correctAnswer: 'Both the motorcycle knowledge and skills tests',
        explanation: 'Applicants must demonstrate both their knowledge of motorcycle rules and their ability to operate a motorcycle safely.',
        source: 'Illinois Motorcycle Operator Manual — Rider Skill Test',
    },
    {
        id: 528,
        category: 'rider skill test',
        question: 'Which Illinois office administers the Rider Skill Test?',
        options: ['Illinois Department of Transportation', 'Illinois State Police', 'Illinois Secretary of State’s office', 'Illinois Department of Revenue'],
        correctAnswer: 'Illinois Secretary of State’s office',
        explanation: 'The Illinois Secretary of State’s office administers the Rider Skill Test.',
        source: 'Illinois Motorcycle Operator Manual — Rider Skill Test',
    },
    {
        id: 529,
        category: 'rider skill test',
        question: 'Applicants for which motorcycle license classifications are generally required to pass the Rider Skill Test?',
        options: ['Classes A and B', 'Classes L and M', 'Classes C and D', 'Classes J and R'],
        correctAnswer: 'Classes L and M',
        explanation: 'Applicants seeking either a Class L or Class M motorcycle license generally must pass the examination.',
        source: 'Illinois Motorcycle Operator Manual — Rider Skill Test',
    },
    {
        id: 530,
        category: 'rider skill test',
        question: 'Which applicant may qualify for an exception from taking the Rider Skill Test at a DMV?',
        options: ['Any applicant who owns a motorcycle', 'Anyone who has held a permit for one month', 'Anyone who has practiced on private property', 'A person age 16 or older with a valid Illinois license who completed an IDOT-approved motorcycle course'],
        correctAnswer: 'A person age 16 or older with a valid Illinois license who completed an IDOT-approved motorcycle course',
        explanation: 'An eligible graduate has already passed a skills test through the approved motorcycle training course.',
        source: 'Illinois Motorcycle Operator Manual — Rider Skill Test',
    },
    {
        id: 531,
        category: 'rider skill test',
        question: 'What must an eligible training-course graduate present to receive the DMV skills-test exception?',
        options: ['An IDOT course-completion card and proper identification', 'A motorcycle purchase receipt', 'A statement from another licensed rider', 'A photograph of the training motorcycle'],
        correctAnswer: 'An IDOT course-completion card and proper identification',
        explanation: 'Both the completion card and proper identification must be presented to claim the skills-test exception.',
        source: 'Illinois Motorcycle Operator Manual — Rider Skill Test',
    },
    {
        id: 532,
        category: 'rider skill test',
        question: 'How long is an IDOT Motorcycle Rider Education Course completion card valid after its issue date?',
        options: ['Three months', 'Six months', 'One year', 'Five years'],
        correctAnswer: 'One year',
        explanation: 'The IDOT course-completion card remains valid for one year from its issue date.',
        source: 'Illinois Motorcycle Operator Manual — Rider Skill Test',
    },
    {
        id: 533,
        category: 'rider skill test',
        question: 'Approximately how large is the off-street paved area used for the Rider Skill Test?',
        options: ['10 feet by 30 feet', '30 feet by 75 feet', '50 feet by 150 feet', '100 feet by 200 feet'],
        correctAnswer: '30 feet by 75 feet',
        explanation: 'The Rider Skill Test takes place in an off-street paved area measuring approximately 30 by 75 feet.',
        source: 'Illinois Motorcycle Operator Manual — Rider Skill Test',
    },
    {
        id: 534,
        category: 'rider skill test',
        question: 'What inspection occurs before the Rider Skill Test begins?',
        options: ['A roadside emissions inspection', 'A written insurance audit', 'A passenger safety demonstration', 'An equipment check'],
        correctAnswer: 'An equipment check',
        explanation: 'The motorcycle’s equipment is inspected before the riding exercises begin.',
        source: 'Illinois Motorcycle Operator Manual — Rider Skill Test',
    },
    {
        id: 535,
        category: 'rider skill test',
        question: 'What is required to receive an Illinois motorcycle license with full privileges?',
        options: ['Perform the required maneuvers as designed', 'Complete only the quick-stop exercise', 'Test exclusively on a three-wheeled vehicle', 'Avoid using the front brake during testing'],
        correctAnswer: 'Perform the required maneuvers as designed',
        explanation: 'The exercises must be completed in their prescribed form to receive full motorcycle privileges.',
        source: 'Illinois Motorcycle Operator Manual — Rider Skill Test',
    },
    {
        id: 536,
        category: 'rider skill test',
        question: 'What restriction is added when an applicant completes the test on a three-wheeled vehicle?',
        options: ['J-17', 'J-05', 'J-11', 'J-01'],
        correctAnswer: 'J-11',
        explanation: 'Testing on a three-wheeled vehicle results in a J-11 restriction limiting the rider to three-wheeled motorcycles.',
        source: 'Illinois Motorcycle Operator Manual — Rider Skill Test',
    },
    {
        id: 537,
        category: 'rider skill test',
        question: 'What does the J-17 restriction permit the license holder to operate?',
        options: ['Two-wheeled motorcycles only', 'Four-wheeled motorcycles only', 'Three-wheeled motorcycles only', 'Motor-driven cycles below 50cc only'],
        correctAnswer: 'Four-wheeled motorcycles only',
        explanation: 'The J-17 restriction is assigned when the skills test is completed on a four-wheeled motorcycle.',
        source: 'Illinois Motorcycle Operator Manual — Rider Skill Test',
    },
    {
        id: 538,
        category: 'rider skill test',
        question: 'How can a rider remove a restriction received after testing on a three- or four-wheeled motorcycle?',
        options: ['Wait until the license renews', 'Submit a written request', 'Complete another knowledge test only', 'Successfully complete a two-wheeled motorcycle test'],
        correctAnswer: 'Successfully complete a two-wheeled motorcycle test',
        explanation: 'The three- or four-wheel-only restriction remains until the rider passes a two-wheeled motorcycle test.',
        source: 'Illinois Motorcycle Operator Manual — Rider Skill Test',
    },
    {
        id: 539,
        category: 'rider skill test',
        question: 'Which ability may be evaluated during the Rider Skill Test?',
        options: ['Making critical decisions and carrying them out', 'Repairing an engine during a breakdown', 'Identifying motorcycle brands by appearance', 'Calculating fuel economy without instruments'],
        correctAnswer: 'Making critical decisions and carrying them out',
        explanation: 'The test can evaluate how riders recognize situations, make critical decisions, and act appropriately.',
        source: 'Illinois Motorcycle Operator Manual — Rider Skill Test',
    },
    {
        id: 540,
        category: 'rider skill test',
        question: 'Which performance factor may an examiner score during the Rider Skill Test?',
        options: ['The color of the rider’s motorcycle', 'The age of the motorcycle', 'Selecting the correct path and remaining within boundaries', 'The number of accessories installed'],
        correctAnswer: 'Selecting the correct path and remaining within boundaries',
        explanation: 'Examiners score safety factors including speed selection, path choice, stops, turns, and swerves.',
        source: 'Illinois Motorcycle Operator Manual — Rider Skill Test',
    },
    {
        id: 541,
        category: 'rider skill test',
        question: 'What happens if an applicant falls or drops the motorcycle during the Rider Skill Test?',
        options: ['Only one point is added', 'The test is terminated', 'The exercise is restarted without penalty', 'The applicant automatically receives a three-wheel restriction'],
        correctAnswer: 'The test is terminated',
        explanation: 'Falling or dropping the motorcycle at any time immediately terminates the test.',
        source: 'Illinois Motorcycle Operator Manual — Rider Skill Test',
    },
    {
        id: 542,
        category: 'rider skill test',
        question: 'How many accumulated points constitute failure and termination of the Rider Skill Test?',
        options: ['Five or more', 'Seven or more', 'Ten or more', 'Eleven or more'],
        correctAnswer: 'Eleven or more',
        explanation: 'Accumulating 11 or more points constitutes failure and terminates the test.',
        source: 'Illinois Motorcycle Operator Manual — Rider Skill Test',
    },
    {
        id: 543,
        category: 'motorcycle tracks',
        question: 'In motorcycle classification, what does the term “track” describe?',
        options: ['The number of separate wheel impressions left while traveling straight', 'The motorcycle’s maximum stopping distance', 'The width of the Rider Skill Test course', 'The distance between the rider and another vehicle'],
        correctAnswer: 'The number of separate wheel impressions left while traveling straight',
        explanation: 'Track refers to how many distinct lines the vehicle’s wheels would leave on a soft surface.',
        source: 'Illinois Motorcycle Operator Manual — Two-Wheel and Three-Wheel Motorcycles',
    },
    {
        id: 544,
        category: 'motorcycle tracks',
        question: 'How is a standard two-wheeled motorcycle classified by track?',
        options: ['Three-wheel/triple track', 'Three-wheel/double track', 'Two-wheel/single track', 'Four-wheel/double track'],
        correctAnswer: 'Two-wheel/single track',
        explanation: 'A standard motorcycle’s two wheels travel along approximately the same line while moving straight.',
        source: 'Illinois Motorcycle Operator Manual — Two-Wheel and Three-Wheel Motorcycles',
    },
    {
        id: 545,
        category: 'motorcycle tracks',
        question: 'How is a motorcycle with a sidecar classified?',
        options: ['Two-wheel/single track', 'Three-wheel/double track', 'Three-wheel/triple track', 'Four-wheel/double track'],
        correctAnswer: 'Three-wheel/double track',
        explanation: 'A motorcycle with a sidecar has three wheels but normally produces two separate wheel paths.',
        source: 'Illinois Motorcycle Operator Manual — Two-Wheel and Three-Wheel Motorcycles',
    },
    {
        id: 546,
        category: 'motorcycle tracks',
        question: 'How is a traditional three-wheeled trike classified?',
        options: ['Two-wheel/double track', 'Three-wheel/single track', 'Four-wheel/triple track', 'Three-wheel/triple track'],
        correctAnswer: 'Three-wheel/triple track',
        explanation: 'A traditional trike’s three wheels travel in three separate paths when moving straight.',
        source: 'Illinois Motorcycle Operator Manual — Two-Wheel and Three-Wheel Motorcycles',
    },
    {
        id: 547,
        category: 'two-wheel rider skill test',
        question: 'What happens when an applicant stalls the motorcycle during a Rider Skill Test exercise?',
        options: ['Points are assessed', 'The applicant receives no penalty', 'The applicant automatically passes that exercise', 'The entire course must be redesigned'],
        correctAnswer: 'Points are assessed',
        explanation: 'Stalling during an exercise adds penalty points even when it does not immediately terminate the test.',
        source: 'Illinois Motorcycle Operator Manual — Two-Wheel Rider Skill Test',
    },
    {
        id: 548,
        category: 'two-wheel rider skill test',
        question: 'How many engine stalls during the Rider Skill Test result in automatic failure?',
        options: ['Two stalls', 'Three stalls', 'Four stalls', 'Six stalls'],
        correctAnswer: 'Four stalls',
        explanation: 'Stalling the engine four times during the test results in automatic failure.',
        source: 'Illinois Motorcycle Operator Manual — Two-Wheel Rider Skill Test',
    },
    {
        id: 549,
        category: 'two-wheel rider skill test',
        question: 'How many cones must a rider weave past during Exercise 1 of the two-wheel skill test?',
        options: ['Three cones', 'Five cones', 'Seven cones', 'Ten cones'],
        correctAnswer: 'Five cones',
        explanation: 'Exercise 1 requires the rider to weave past all five cones without touching or skipping one.',
        source: 'Illinois Motorcycle Operator Manual — Two-Wheel Rider Skill Test',
    },
    {
        id: 550,
        category: 'two-wheel rider skill test',
        question: 'During the two-wheel cone weave, on which side should the rider pass the first cone?',
        options: ['Directly over the cone', 'Either side chosen by the rider', 'To the left', 'To the right'],
        correctAnswer: 'To the right',
        explanation: 'The rider begins by passing to the right of the first cone and then alternates sides.',
        source: 'Illinois Motorcycle Operator Manual — Two-Wheel Rider Skill Test',
    },
    {
        id: 551,
        category: 'two-wheel rider skill test',
        question: 'How should the two-wheel rider complete the normal stop after the cone weave?',
        options: ['Stop smoothly without skidding, with the front tire inside the box and off its lines', 'Skid the rear tire across the box', 'Stop with both tires touching the painted boundary', 'Put the front tire beyond the stopping box'],
        correctAnswer: 'Stop smoothly without skidding, with the front tire inside the box and off its lines',
        explanation: 'The front tire must remain completely inside the stopping box without touching its painted boundaries.',
        source: 'Illinois Motorcycle Operator Manual — Two-Wheel Rider Skill Test',
    },
    {
        id: 552,
        category: 'two-wheel rider skill test',
        question: 'How does Exercise 2 of the two-wheel skill test begin?',
        options: ['With a left U-turn outside the boundary', 'With a quick stop from 18 mph', 'With a right turn from a stop between the boundary lines', 'With a weave around five cones'],
        correctAnswer: 'With a right turn from a stop between the boundary lines',
        explanation: 'The rider begins with a right turn from a stop without touching either boundary line.',
        source: 'Illinois Motorcycle Operator Manual — Two-Wheel Rider Skill Test',
    },
    {
        id: 553,
        category: 'two-wheel rider skill test',
        question: 'After making the initial right turn in Exercise 2, what maneuver must the rider perform?',
        options: ['A right U-turn outside the test area', 'A left U-turn inside the painted box', 'An emergency stop on the Start T', 'A left-hand cone weave'],
        correctAnswer: 'A left U-turn inside the painted box',
        explanation: 'After crossing diagonally, the rider completes a left U-turn within the appropriate painted boundary.',
        source: 'Illinois Motorcycle Operator Manual — Two-Wheel Rider Skill Test',
    },
    {
        id: 554,
        category: 'two-wheel rider skill test',
        question: 'Which U-turn boundary applies to a two-wheeled motorcycle with an engine displacement of 600cc or more?',
        options: ['The dashed line', 'The outside sideline', 'Either boundary line', 'The solid line'],
        correctAnswer: 'The solid line',
        explanation: 'Motorcycles of 600cc or more use the wider solid-line boundary, while smaller motorcycles use the dashed line.',
        source: 'Illinois Motorcycle Operator Manual — Two-Wheel Rider Skill Test',
    },
    {
        id: 555,
        category: 'two-wheel rider skill test',
        question: 'What speed must a rider establish by the first line during the quick-stop exercise?',
        options: ['Between 12 and 18 mph', 'Between 5 and 10 mph', 'Between 20 and 30 mph', 'Exactly 25 mph'],
        correctAnswer: 'Between 12 and 18 mph',
        explanation: 'The rider must reach and maintain a steady speed between 12 and 18 mph by the first line.',
        source: 'Illinois Motorcycle Operator Manual — Two-Wheel Rider Skill Test',
    },
    {
        id: 556,
        category: 'two-wheel rider skill test',
        question: 'During the two-wheel quick-stop exercise, when should the rider begin stopping?',
        options: ['When the rear tire reaches the first line', 'Before entering the timing zone', 'When the front tire crosses the second line', 'Immediately after leaving the Start T'],
        correctAnswer: 'When the front tire crosses the second line',
        explanation: 'The second line signals the rider to stop as quickly and safely as possible.',
        source: 'Illinois Motorcycle Operator Manual — Two-Wheel Rider Skill Test',
    },
    {
        id: 557,
        category: 'two-wheel rider skill test',
        question: 'What scoring rule applies if the motorcycle skids during the quick-stop exercise?',
        options: ['Skidding causes automatic failure', 'The rider does not lose points merely for skidding', 'The rider must repeat the entire examination', 'Skidding adds eleven points'],
        correctAnswer: 'The rider does not lose points merely for skidding',
        explanation: 'The exercise measures quick stopping ability, so a skid by itself is not penalized.',
        source: 'Illinois Motorcycle Operator Manual — Two-Wheel Rider Skill Test',
    },
    {
        id: 558,
        category: 'two-wheel rider skill test',
        question: 'After completing the quick stop, what must the rider prevent the motorcycle from doing?',
        options: ['Remaining upright', 'Idling', 'Facing forward', 'Rolling in either direction'],
        correctAnswer: 'Rolling in either direction',
        explanation: 'Once stopped, the motorcycle must remain stationary instead of rolling forward or backward.',
        source: 'Illinois Motorcycle Operator Manual — Two-Wheel Rider Skill Test',
    },
    {
        id: 559,
        category: 'two-wheel rider skill test',
        question: 'During the obstacle-swerve exercise, when should the two-wheel rider begin the swerve?',
        options: ['After the front tire passes the second line', 'Before reaching the first line', 'Immediately after leaving the Start T', 'After stopping inside the timing zone'],
        correctAnswer: 'After the front tire passes the second line',
        explanation: 'The rider maintains a steady approach and begins the swerve only after crossing the designated second line.',
        source: 'Illinois Motorcycle Operator Manual — Two-Wheel Rider Skill Test',
    },
    {
        id: 560,
        category: 'two-wheel rider skill test',
        question: 'What must the rider accomplish during the obstacle swerve?',
        options: ['Touch the obstacle line with one tire', 'Cross the outside sideline', 'Avoid the obstacle line and remain inside the sideline', 'Stop directly on the obstacle line'],
        correctAnswer: 'Avoid the obstacle line and remain inside the sideline',
        explanation: 'The rider must avoid the obstacle while remaining within the course’s outside boundary.',
        source: 'Illinois Motorcycle Operator Manual — Two-Wheel Rider Skill Test',
    },
    {
        id: 561,
        category: 'three-wheel and four-wheel rider skill test',
        question: 'What maneuver begins Exercise 1 of the three-/four-wheel skill test?',
        options: ['A right U-turn', 'A sharp left turn', 'A five-cone weave', 'An obstacle swerve'],
        correctAnswer: 'A sharp left turn',
        explanation: 'Exercise 1 begins with acceleration followed by a sharp left between the outside boundary and cone.',
        source: 'Illinois Motorcycle Operator Manual — Three-Wheel/Four-Wheel Rider Skill Test',
    },
    {
        id: 562,
        category: 'three-wheel and four-wheel rider skill test',
        question: 'Which tire must finish inside the stopping box when testing a vehicle with two front tires?',
        options: ['The right rear tire', 'Either rear tire', 'Both rear tires', 'The left front tire'],
        correctAnswer: 'The left front tire',
        explanation: 'On a vehicle with two front tires, the left front tire must finish inside the stopping box.',
        source: 'Illinois Motorcycle Operator Manual — Three-Wheel/Four-Wheel Rider Skill Test',
    },
    {
        id: 563,
        category: 'three-wheel and four-wheel rider skill test',
        question: 'What is the cone pattern in Exercise 2 of the three-/four-wheel skill test?',
        options: ['Left of the first, right of the second, and left of the third', 'Right of all three cones', 'Left of all three cones', 'Right of the first, left of the second, and right of the third'],
        correctAnswer: 'Left of the first, right of the second, and left of the third',
        explanation: 'The applicant must follow this alternating path without touching or skipping a cone.',
        source: 'Illinois Motorcycle Operator Manual — Three-Wheel/Four-Wheel Rider Skill Test',
    },
    {
        id: 564,
        category: 'three-wheel and four-wheel rider skill test',
        question: 'After completing the three-cone weave, where should the applicant stop?',
        options: ['Inside the final stopping box', 'Beside the first cone', 'At the Start T facing the opposite side of the course', 'Outside the course boundary'],
        correctAnswer: 'At the Start T facing the opposite side of the course',
        explanation: 'After the weave, the applicant turns right and stops at the Start T for the next portion.',
        source: 'Illinois Motorcycle Operator Manual — Three-Wheel/Four-Wheel Rider Skill Test',
    },
    {
        id: 565,
        category: 'three-wheel and four-wheel rider skill test',
        question: 'What must cross the second line before a three-/four-wheel applicant begins the quick stop?',
        options: ['The rear axle only', 'The front tire or front overhang', 'The entire vehicle', 'The rider’s body'],
        correctAnswer: 'The front tire or front overhang',
        explanation: 'The quick stop begins when the vehicle’s front tire or front overhang crosses the second line.',
        source: 'Illinois Motorcycle Operator Manual — Three-Wheel/Four-Wheel Rider Skill Test',
    },
    {
        id: 566,
        category: 'three-wheel and four-wheel rider skill test',
        question: 'How should the applicant finish the three-/four-wheel obstacle-swerve exercise?',
        options: ['Stop on the obstacle line', 'Exit the test range without stopping', 'Reverse to the Start T', 'Stop smoothly and wait for further instructions'],
        correctAnswer: 'Stop smoothly and wait for further instructions',
        explanation: 'After avoiding both boundary lines, the applicant finishes with a controlled stop and awaits instructions.',
        source: 'Illinois Motorcycle Operator Manual — Three-Wheel/Four-Wheel Rider Skill Test',
    },
    {
        id: 567,
        category: 'required motorcycle equipment',
        question: 'What braking equipment must a street-legal motorcycle have in Illinois?',
        options: ['Brakes on both wheels with the required separate means of application', 'A brake on the front wheel only', 'A parking brake only', 'A rear brake operated exclusively by a passenger'],
        correctAnswer: 'Brakes on both wheels with the required separate means of application',
        explanation: 'A motorcycle needs brakes on both wheels with separate application for each, or two separate means of applying the rear brake.',
        source: 'Illinois Motorcycle Operator Manual — Required Motorcycle Equipment',
    },
    {
        id: 568,
        category: 'required motorcycle equipment',
        question: 'What brake equipment is required on a motor-driven cycle?',
        options: ['Separate brakes on all four wheels', 'A front brake operated only by hand', 'A hand- or foot-operated brake on at least one wheel, preferably the rear', 'No brake when the engine is below 50cc'],
        correctAnswer: 'A hand- or foot-operated brake on at least one wheel, preferably the rear',
        explanation: 'This is the manual’s minimum braking requirement for a motor-driven cycle.',
        source: 'Illinois Motorcycle Operator Manual — Required Motorcycle Equipment',
    },
    {
        id: 569,
        category: 'required motorcycle equipment',
        question: 'What eye protection is required for a motorcycle’s operator and passenger?',
        options: ['A windshield only', 'Glasses, goggles, or a transparent windshield', 'Sunglasses only', 'Eye protection only when traveling above 30 mph'],
        correctAnswer: 'Glasses, goggles, or a transparent windshield',
        explanation: 'Both the operator and passenger must receive eye protection through one of these approved methods.',
        source: 'Illinois Motorcycle Operator Manual — Required Motorcycle Equipment',
    },
    {
        id: 570,
        category: 'required motorcycle equipment',
        question: 'When may a passenger legally ride without passenger footrests?',
        options: ['Whenever the passenger is an adult', 'When traveling below 20 mph', 'When the passenger holds onto the operator', 'When riding in a sidecar or enclosed cab'],
        correctAnswer: 'When riding in a sidecar or enclosed cab',
        explanation: 'Otherwise, a motorcycle carrying a passenger must have appropriately adjusted passenger footrests.',
        source: 'Illinois Motorcycle Operator Manual — Required Motorcycle Equipment',
    },
    {
        id: 571,
        category: 'required motorcycle equipment',
        question: 'How high may a motorcycle’s handlebars extend under the manual’s equipment rules?',
        options: ['No higher than the operator’s head while seated normally', 'No higher than the operator’s shoulders', 'No higher than the motorcycle’s mirrors', 'Any height selected by the operator'],
        correctAnswer: 'No higher than the operator’s head while seated normally',
        explanation: 'Handlebar height is measured relative to the operator’s head in the normal riding position.',
        source: 'Illinois Motorcycle Operator Manual — Required Motorcycle Equipment',
    },
    {
        id: 572,
        category: 'required motorcycle equipment',
        question: 'While the motorcycle is moving, how many hands must the operator keep on a handlebar grip at minimum?',
        options: ['Both hands at every moment', 'Neither hand when traveling straight', 'At least one hand', 'One hand only while turning'],
        correctAnswer: 'At least one hand',
        explanation: 'The operator must keep at least one hand on a handlebar grip whenever the motorcycle is moving.',
        source: 'Illinois Motorcycle Operator Manual — Required Motorcycle Equipment',
    },
    {
        id: 573,
        category: 'required motorcycle equipment',
        question: 'What headlight must a motorcycle display while operating on streets or highways?',
        options: ['One amber light visible for 200 feet', 'At least one white light visible for 500 feet', 'Two red lights visible for 500 feet', 'One white light used only after sunset'],
        correctAnswer: 'At least one white light visible for 500 feet',
        explanation: 'The required white headlight must be illuminated whenever the motorcycle operates on a street or highway.',
        source: 'Illinois Motorcycle Operator Manual — Required Motorcycle Equipment',
    },
    {
        id: 574,
        category: 'required motorcycle equipment',
        question: 'When may a motorcycle’s high-beam modulating device not be used?',
        options: ['During daylight', 'On a rural road', 'When the motorcycle has a windshield', 'When lighted lamps are required for all vehicles'],
        correctAnswer: 'When lighted lamps are required for all vehicles',
        explanation: 'High-beam modulation is not permitted during conditions when all vehicles are legally required to display lights.',
        source: 'Illinois Motorcycle Operator Manual — Required Motorcycle Equipment',
    },
    {
        id: 575,
        category: 'required motorcycle equipment',
        question: 'From what distance must a motorcycle’s horn be audible?',
        options: ['200 feet', '50 feet', '500 feet', '1,000 feet'],
        correctAnswer: '200 feet',
        explanation: 'The motorcycle’s horn must be audible from a distance of 200 feet.',
        source: 'Illinois Motorcycle Operator Manual — Required Motorcycle Equipment',
    },
    {
        id: 576,
        category: 'required motorcycle equipment',
        question: 'What must the motorcycle’s license plate light accomplish?',
        options: ['Flash whenever the brakes are applied', 'Illuminate only while parked', 'Use white light and make the plate visible from at least 50 feet whenever the headlight is on', 'Make the plate visible from exactly 200 feet'],
        correctAnswer: 'Use white light and make the plate visible from at least 50 feet whenever the headlight is on',
        explanation: 'The license plate light operates with the headlight and must provide the specified visibility.',
        source: 'Illinois Motorcycle Operator Manual — Required Motorcycle Equipment',
    },
    {
        id: 577,
        category: 'required motorcycle equipment',
        question: 'What is required of a motorcycle’s muffler?',
        options: ['It may be removed during daytime riding', 'It must remain operational and prevent excessive or unusual noise', 'It must increase the exhaust sound', 'It is required only on motorcycles above 600cc'],
        correctAnswer: 'It must remain operational and prevent excessive or unusual noise',
        explanation: 'A motorcycle muffler must be properly maintained and kept in constant operation.',
        source: 'Illinois Motorcycle Operator Manual — Required Motorcycle Equipment',
    },
    {
        id: 578,
        category: 'required motorcycle equipment',
        question: 'What does Illinois law prohibit concerning motorcycle exhaust systems?',
        options: ['Replacing a damaged muffler', 'Inspecting an exhaust system', 'Reducing excessive exhaust noise', 'Modifying the exhaust to increase its noise level'],
        correctAnswer: 'Modifying the exhaust to increase its noise level',
        explanation: 'Illinois law prohibits exhaust-system modifications intended to make the motorcycle louder.',
        source: 'Illinois Motorcycle Operator Manual — Required Motorcycle Equipment',
    },
    {
        id: 579,
        category: 'required motorcycle equipment',
        question: 'How far behind the motorcycle must its rearview mirror reflect a view?',
        options: ['At least 200 feet', 'At least 50 feet', 'At least 500 feet', 'At least 1,000 feet'],
        correctAnswer: 'At least 200 feet',
        explanation: 'The rearview mirror must provide the operator with a view extending at least 200 feet behind.',
        source: 'Illinois Motorcycle Operator Manual — Required Motorcycle Equipment',
    },
    {
        id: 580,
        category: 'required motorcycle equipment',
        question: 'When may a motorcycle operator legally carry a passenger on the seat?',
        options: ['Whenever the passenger wears a helmet', 'Whenever the trip is shorter than one mile', 'When the motorcycle is designed to carry two people', 'When the passenger can reach the pavement'],
        correctAnswer: 'When the motorcycle is designed to carry two people',
        explanation: 'A passenger cannot legally be carried on a motorcycle designed only for its operator.',
        source: 'Illinois Motorcycle Operator Manual — Required Motorcycle Equipment',
    },
    {
        id: 581,
        category: 'required motorcycle equipment',
        question: 'How must each person sit on a motorcycle?',
        options: ['Sideways with both legs on one side', 'Astride the seat, facing forward, with one leg on each side', 'Facing backward while holding the seat', 'In any position that feels comfortable'],
        correctAnswer: 'Astride the seat, facing forward, with one leg on each side',
        explanation: 'This riding position is required for everyone seated on the motorcycle.',
        source: 'Illinois Motorcycle Operator Manual — Required Motorcycle Equipment',
    },
    {
        id: 582,
        category: 'required motorcycle equipment',
        question: 'What lighting must a motorcycle have at the rear?',
        options: ['A white stoplight and amber taillight', 'A red reflector only', 'A brake light visible for 200 feet', 'A red brake-actuated stoplight and red taillight, each visible for 500 feet'],
        correctAnswer: 'A red brake-actuated stoplight and red taillight, each visible for 500 feet',
        explanation: 'The stoplight activates with the brake, while the taillight provides continuous rear visibility.',
        source: 'Illinois Motorcycle Operator Manual — Required Motorcycle Equipment',
    },
    {
        id: 583,
        category: 'stranded motorcycles',
        question: 'What generally characterizes a high-capacity roadway?',
        options: ['Multiple lanes and systems intended to handle high traffic volume', 'A single narrow lane with no traffic controls', 'Residential streets with very low speed limits', 'Unpaved rural paths'],
        correctAnswer: 'Multiple lanes and systems intended to handle high traffic volume',
        explanation: 'Highways and major urban arterial roads are examples of high-capacity roadways.',
        source: 'Illinois Motorcycle Operator Manual — Safety Protocol for Stranded Motorcycles',
    },
    {
        id: 584,
        category: 'stranded motorcycles',
        question: 'What generally characterizes a low-capacity roadway?',
        options: ['Multiple express lanes and controlled intersections', 'Heavy traffic moving at expressway speeds', 'Fewer lanes, fewer traffic controls, and lower traffic volume', 'Mandatory toll collection'],
        correctAnswer: 'Fewer lanes, fewer traffic controls, and lower traffic volume',
        explanation: 'Residential streets, rural roads, and secondary routes commonly fit this description.',
        source: 'Illinois Motorcycle Operator Manual — Safety Protocol for Stranded Motorcycles',
    },
    {
        id: 585,
        category: 'stranded motorcycles',
        question: 'Before slowing or stopping because of a motorcycle breakdown, what should the rider do?',
        options: ['Switch off every light', 'Activate the turn signal and flash the brake light', 'Sound the horn continuously', 'Dismount before reducing speed'],
        correctAnswer: 'Activate the turn signal and flash the brake light',
        explanation: 'These signals warn following drivers that the motorcycle is about to slow down or change direction.',
        source: 'Illinois Motorcycle Operator Manual — Safety Protocol for Stranded Motorcycles',
    },
    {
        id: 586,
        category: 'stranded motorcycles',
        question: 'If possible, where should a rider move a stranded motorcycle?',
        options: ['Into the center lane', 'Onto the left edge of the roadway', 'Directly behind another stopped vehicle', 'Onto the right shoulder or another safe location as far from traffic as possible'],
        correctAnswer: 'Onto the right shoulder or another safe location as far from traffic as possible',
        explanation: 'Creating the greatest practical distance from passing traffic reduces the rider’s exposure to a collision.',
        source: 'Illinois Motorcycle Operator Manual — Safety Protocol for Stranded Motorcycles',
    },
    {
        id: 587,
        category: 'stranded motorcycles',
        question: 'What lights should be activated after the motorcycle has been moved to a safe stopping location?',
        options: ['Hazard lights', 'High beams only', 'License plate light only', 'Turn signals on alternating sides'],
        correctAnswer: 'Hazard lights',
        explanation: 'Hazard lights help other motorists recognize that the stopped motorcycle is disabled or experiencing an emergency.',
        source: 'Illinois Motorcycle Operator Manual — Safety Protocol for Stranded Motorcycles',
    },
    {
        id: 588,
        category: 'stranded motorcycles',
        question: 'On which side should a rider dismount a stranded motorcycle?',
        options: ['The side closest to moving traffic', 'Whichever side has the kickstand', 'The side opposite moving traffic', 'The left side in every situation'],
        correctAnswer: 'The side opposite moving traffic',
        explanation: 'Dismounting away from traffic reduces the risk of stepping into the path of a passing vehicle.',
        source: 'Illinois Motorcycle Operator Manual — Safety Protocol for Stranded Motorcycles',
    },
    {
        id: 589,
        category: 'stranded motorcycles',
        question: 'After dismounting on a high-capacity roadway, where should the rider wait?',
        options: ['Seated on the motorcycle', 'In a safe location away from traffic', 'In the nearest travel lane', 'Directly behind the motorcycle'],
        correctAnswer: 'In a safe location away from traffic',
        explanation: 'After dismounting, the rider should move away from both the roadway and the disabled motorcycle.',
        source: 'Illinois Motorcycle Operator Manual — Safety Protocol for Stranded Motorcycles',
    },
    {
        id: 590,
        category: 'stranded motorcycles',
        question: 'What number should a stranded rider call for assistance on a high- or low-capacity Illinois roadway?',
        options: ['311', '411', '*999 only', '911'],
        correctAnswer: '911',
        explanation: 'The manual instructs stranded riders on high- and low-capacity roads to call 911 for assistance.',
        source: 'Illinois Motorcycle Operator Manual — Safety Protocol for Stranded Motorcycles',
    },
    {
        id: 591,
        category: 'stranded motorcycles',
        question: 'What should a rider do after calling for help on a high-capacity roadway?',
        options: ['Wait for an emergency responder to arrive', 'Push the motorcycle through active traffic', 'Walk along the travel lane', 'Attempt to stop passing vehicles'],
        correctAnswer: 'Wait for an emergency responder to arrive',
        explanation: 'The rider should remain safely away from traffic rather than attempting dangerous roadside action.',
        source: 'Illinois Motorcycle Operator Manual — Safety Protocol for Stranded Motorcycles',
    },
    {
        id: 592,
        category: 'stranded motorcycles',
        question: 'Which is an appropriate waiting location after a breakdown on a low-capacity road?',
        options: ['In the roadway beside the motorcycle', 'Directly in front of the motorcycle', 'On a sidewalk, behind a guardrail, or at the edge of a field', 'In the center of the nearest intersection'],
        correctAnswer: 'On a sidewalk, behind a guardrail, or at the edge of a field',
        explanation: 'These locations provide separation from vehicles using the low-capacity roadway.',
        source: 'Illinois Motorcycle Operator Manual — Safety Protocol for Stranded Motorcycles',
    },
    {
        id: 593,
        category: 'stranded motorcycles',
        question: 'What assistance numbers may a stranded rider call on the Illinois Tollway?',
        options: ['311 or 411', '*999 or 911', '511 only', '*611 only'],
        correctAnswer: '*999 or 911',
        explanation: 'Either *999 or 911 may be used to request assistance for a breakdown or emergency on the Illinois Tollway.',
        source: 'Illinois Motorcycle Operator Manual — Safety Protocol for Stranded Motorcycles',
    },
    {
        id: 594,
        category: 'stranded motorcycles',
        question: 'What should a stranded rider do while waiting for assistance on the Illinois Tollway?',
        options: ['Stand between the motorcycle and passing traffic', 'Attempt to repair the motorcycle in an active lane', 'Leave the motorcycle and walk along the Tollway', 'Remain near the motorcycle in a safe location away from traffic and await responders'],
        correctAnswer: 'Remain near the motorcycle in a safe location away from traffic and await responders',
        explanation: 'The rider should remain safely nearby without staying in a vulnerable roadway position.',
        source: 'Illinois Motorcycle Operator Manual — Safety Protocol for Stranded Motorcycles',
    },
    {
        id: 595,
        category: 'knowledge test sample questions',
        question: 'According to the manual’s sample knowledge test, when is it most important to flash the motorcycle’s brake light?',
        options: ['When the rider will be slowing suddenly', 'Whenever a stop sign is visible', 'When the turn signals are not working', 'Whenever another vehicle is far behind'],
        correctAnswer: 'When the rider will be slowing suddenly',
        explanation: 'Flashing the brake light gives drivers behind extra warning of an unexpected or rapid reduction in speed.',
        source: 'Illinois Motorcycle Operator Manual — Knowledge Test Sample Questions',
    },
    {
        id: 596,
        category: 'knowledge test sample questions',
        question: 'Approximately how much of a motorcycle’s potential stopping power does the front brake provide?',
        options: ['One-quarter', 'One-half', 'Three-quarters', 'All of it'],
        correctAnswer: 'Three-quarters',
        explanation: 'The front brake supplies approximately three-quarters of a motorcycle’s potential stopping power.',
        source: 'Illinois Motorcycle Operator Manual — Knowledge Test Sample Questions',
    },
    {
        id: 597,
        category: 'knowledge test sample questions',
        question: 'What handlebar action produces a proper motorcycle swerve?',
        options: ['Pulling the handlegrip opposite the intended direction', 'Pressing the handlegrip in the direction of the intended turn', 'Turning both handlebars as far as possible', 'Shifting body weight without pressing either grip'],
        correctAnswer: 'Pressing the handlegrip in the direction of the intended turn',
        explanation: 'To swerve right, press the right grip; to swerve left, press the left grip.',
        source: 'Illinois Motorcycle Operator Manual — Knowledge Test Sample Questions',
    },
    {
        id: 598,
        category: 'knowledge test sample questions',
        question: 'A car is waiting to enter the rider’s intersection. According to the sample knowledge test, what is the rider’s best response?',
        options: ['Make eye contact and assume the driver will wait', 'Maintain speed and move toward the car', 'Accelerate through the intersection', 'Reduce speed and be ready to react'],
        correctAnswer: 'Reduce speed and be ready to react',
        explanation: 'The driver may fail to see the motorcycle or enter unexpectedly, so the rider should prepare for evasive action.',
        source: 'Illinois Motorcycle Operator Manual — Knowledge Test Sample Questions',
    },
    {
        id: 599,
        category: 'motorcycle rider safety training',
        question: 'What is the status of Motorcycle Rider Safety Training Region A in the manual?',
        options: ['It is unassigned until a new regional center is selected', 'It is operated by Illinois Central College', 'It is operated by Southern Illinois University', 'It has permanently ended all motorcycle training'],
        correctAnswer: 'It is unassigned until a new regional center is selected',
        explanation: 'The manual states that Region A classes will resume when a replacement regional center is chosen.',
        source: 'Illinois Motorcycle Operator Manual — Motorcycle Rider Safety Training Regional Centers',
    },
    {
        id: 600,
        category: 'motorcycle rider safety training',
        question: 'Which institution operates the manual’s Region B Motorcycle Rider Safety Program?',
        options: ['University of Illinois Chicago', 'Loyola University Chicago', 'Illinois Central College in Peoria', 'Southern Illinois University Edwardsville'],
        correctAnswer: 'Illinois Central College in Peoria',
        explanation: 'Illinois Central College operates the Region B Motorcycle Rider Safety Program listed in the manual.',
        source: 'Illinois Motorcycle Operator Manual — Motorcycle Rider Safety Training Regional Centers',
    },
    {
        id: 601,
        category: 'motorcycle rider safety training',
        question: 'Which institution operates the manual’s Region C Motorcycle Rider Program?',
        options: ['Illinois State University', 'Southern Illinois University Carbondale', 'Northern Illinois University', 'University of Illinois Springfield'],
        correctAnswer: 'Southern Illinois University Carbondale',
        explanation: 'Southern Illinois University Carbondale operates the Motorcycle Rider Program for Region C.',
        source: 'Illinois Motorcycle Operator Manual — Motorcycle Rider Safety Training Regional Centers',
    },
    {
        id: 602,
        category: 'motorcycle rider safety training',
        question: 'Whom should a person contact for motorcycle course dates, times, and locations?',
        options: ['Any local automobile dealership', 'The nearest police department', 'The Motorcycle Safety Foundation’s national office only', 'The appropriate regional training center'],
        correctAnswer: 'The appropriate regional training center',
        explanation: 'The manual directs riders to contact the appropriate regional center for current course dates, times, and locations.',
        source: 'Illinois Motorcycle Operator Manual — Motorcycle Rider Safety Training Regional Centers',
    },
    {
        id: 603,
        category: 'motorcycle classification',
        question: 'What Illinois license classification is required for a motorcycle with an engine displacement of 150cc or greater?',
        options: [
            'Class M',
            'Class L',
            'Class D only',
            'No license classification',
        ],
        correctAnswer: 'Class M',
        explanation: 'A motorcycle with an engine displacement of 150cc or greater requires Class M driving privileges.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 604,
        category: 'motorcycle classification',
        question: 'How many wheels may a vehicle classified as a Class M motorcycle have under the manual’s criteria?',
        options: [
            'Exactly two wheels',
            'Two or three wheels only',
            'Two, three, or four wheels',
            'Exactly four wheels',
        ],
        correctAnswer: 'Two, three, or four wheels',
        explanation: 'The Class M definition covers motorcycles with two, three, or four wheels when their engine displacement is at least 150cc.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 605,
        category: 'motor-driven cycle classification',
        question: 'What engine-displacement range defines a motor-driven cycle requiring a Class L license?',
        options: [
            '0cc–49cc',
            '1cc–149cc',
            '50cc–250cc',
            '150cc and greater',
        ],
        correctAnswer: '1cc–149cc',
        explanation: 'A two-, three-, or four-wheeled vehicle within this displacement range is classified as a motor-driven cycle requiring Class L privileges unless it satisfies every moped criterion.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 606,
        category: 'motor-driven cycle classification',
        question: 'How many wheels may a motor-driven cycle classified under Class L have?',
        options: [
            'Exactly two wheels',
            'Exactly three wheels',
            'Two wheels only unless it has a sidecar',
            'Two, three, or four wheels',
        ],
        correctAnswer: 'Two, three, or four wheels',
        explanation: 'Class L motor-driven cycles are not limited to two wheels. The classification may also cover three- and four-wheeled vehicles.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 607,
        category: 'moped classification',
        question: 'To qualify as a moped, what speed must the vehicle be capable of attaining within one mile?',
        options: [
            'Between 20 and 30 mph',
            'Between 10 and 20 mph',
            'Between 30 and 40 mph',
            'More than 45 mph',
        ],
        correctAnswer: 'Between 20 and 30 mph',
        explanation: 'A qualifying moped must be capable of attaining at least 20 mph but no more than 30 mph within one mile.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 608,
        category: 'moped classification',
        question: 'What is the maximum motor output allowed for a vehicle to qualify as a moped?',
        options: [
            '1 brake horsepower',
            '1.5 brake horsepower',
            '2 brake horsepower',
            '5 brake horsepower',
        ],
        correctAnswer: '2 brake horsepower',
        explanation: 'The motor may produce no more than 2 brake horsepower for the vehicle to qualify as a moped.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 609,
        category: 'moped classification',
        question: 'If a moped uses an internal-combustion engine, what is its maximum permitted engine displacement?',
        options: [
            '25cc',
            '50cc',
            '100cc',
            '149cc',
        ],
        correctAnswer: '50cc',
        explanation: 'When an internal-combustion engine is used, its displacement cannot exceed 50cc.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 610,
        category: 'moped classification',
        question: 'What must be true of a moped’s power-drive system?',
        options: [
            'It must have at least five manual gears',
            'It must require clutch operation',
            'It must allow manual shifting at highway speeds',
            'It must not require the operator to shift gears',
        ],
        correctAnswer: 'It must not require the operator to shift gears',
        explanation: 'An operator-shifted transmission disqualifies the vehicle from the manual’s moped classification.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 611,
        category: 'moped classification',
        question: 'How many of the manual’s moped criteria must a vehicle satisfy to be legally classified as a moped?',
        options: [
            'All four criteria',
            'Any one criterion',
            'At least two criteria',
            'At least three criteria',
        ],
        correctAnswer: 'All four criteria',
        explanation: 'A vehicle must satisfy the speed, horsepower, engine-displacement, and no-shifting requirements to qualify as a moped.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 612,
        category: 'moped classification',
        question: 'How is a vehicle classified when it fails even one of the four moped criteria but remains within motor-driven-cycle specifications?',
        options: [
            'As a Class M motorcycle in every case',
            'As a bicycle requiring no license',
            'As a motor-driven cycle requiring Class L privileges',
            'As an automobile requiring Class D privileges',
        ],
        correctAnswer: 'As a motor-driven cycle requiring Class L privileges',
        explanation: 'Failing even one moped requirement means the vehicle is treated as a motor-driven cycle when its displacement remains within the Class L range.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 613,
        category: 'moped classification',
        question: 'What type of license may be used to operate a vehicle that meets all four moped criteria?',
        options: [
            'Only a Class M license',
            'Any current, valid driver’s license classification',
            'Only a Class L license',
            'No driver’s license of any kind',
        ],
        correctAnswer: 'Any current, valid driver’s license classification',
        explanation: 'A qualifying moped may be operated with a valid driver’s license of any classification. A separate Class L or Class M classification is not required.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 614,
        category: 'moped classification',
        question: 'A vehicle reaches 25 mph within one mile, produces 2 brake horsepower, has a 49cc engine, and requires no shifting. How is it classified?',
        options: [
            'Class M motorcycle',
            'Class L motor-driven cycle',
            'Automobile',
            'Moped',
        ],
        correctAnswer: 'Moped',
        explanation: 'The vehicle travels within the required 20–30 mph range, produces no more than 2 brake horsepower, stays within 50cc, and requires no shifting.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 615,
        category: 'motor-driven cycle classification',
        question: 'A vehicle has a 51cc internal-combustion engine but satisfies the other three moped criteria. What classification does it require?',
        options: [
            'Motor-driven cycle requiring Class L privileges',
            'Moped operable with any license',
            'Class M motorcycle automatically',
            'Bicycle requiring no license',
        ],
        correctAnswer: 'Motor-driven cycle requiring Class L privileges',
        explanation: 'A 51cc internal-combustion engine exceeds the moped limit. Because it remains below 150cc, the vehicle falls under Class L.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 616,
        category: 'motor-driven cycle classification',
        question: 'Which license classification is required for a 149cc motor-driven cycle?',
        options: [
            'Class M',
            'Class D',
            'Class L',
            'No license',
        ],
        correctAnswer: 'Class L',
        explanation: 'An engine displacement of 149cc is the upper end of the Class L motor-driven-cycle range.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 617,
        category: 'motorcycle classification',
        question: 'Which license classification is required for a 150cc motorcycle?',
        options: [
            'Class L',
            'Class M',
            'Class D only',
            'A moped endorsement',
        ],
        correctAnswer: 'Class M',
        explanation: 'The Class M range begins at 150cc, so a motorcycle with exactly 150cc requires Class M privileges.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 618,
        category: 'motorcycle classification',
        question: 'A three-wheeled motorcycle has an engine displacement of 200cc. Which license class applies?',
        options: [
            'Class L because it has three wheels',
            'Class D because it has more than two wheels',
            'Any valid license because it is a trike',
            'Class M because its displacement is at least 150cc',
        ],
        correctAnswer: 'Class M because its displacement is at least 150cc',
        explanation: 'The motorcycle’s three-wheel design does not change its engine-based classification. Its 200cc displacement places it in Class M.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 619,
        category: 'motor-driven cycle classification',
        question: 'A four-wheeled motor-driven cycle has an engine displacement of 100cc and does not qualify as a moped. Which license classification applies?',
        options: [
            'Class L',
            'Class M',
            'Class D only',
            'No classification',
        ],
        correctAnswer: 'Class L',
        explanation: 'The manual includes four-wheeled vehicles in Class L when displacement is between 1cc and 149cc and the vehicle does not qualify as a moped.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 620,
        category: 'moped classification',
        question: 'A 49cc vehicle can reach 35 mph within one mile, despite meeting the other moped requirements. How is it classified?',
        options: [
            'As a moped because it is below 50cc',
            'As a Class M motorcycle',
            'As a motor-driven cycle requiring Class L privileges',
            'As an unlicensed bicycle',
        ],
        correctAnswer: 'As a motor-driven cycle requiring Class L privileges',
        explanation: 'A maximum speed of 35 mph exceeds the moped limit of 30 mph. With a 49cc engine, the vehicle falls within the Class L range.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 621,
        category: 'moped classification',
        question: 'A 49cc vehicle reaches 25 mph and requires no shifting but produces 3 brake horsepower. What license classification is required?',
        options: [
            'No license is required',
            'Class L',
            'Class M',
            'Any license because it travels below 30 mph',
        ],
        correctAnswer: 'Class L',
        explanation: 'Producing 3 brake horsepower exceeds the moped maximum of 2 brake horsepower, so the vehicle becomes a Class L motor-driven cycle.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 622,
        category: 'moped classification',
        question: 'A 50cc vehicle reaches 25 mph and produces 2 brake horsepower but requires the operator to shift gears. How is it classified?',
        options: [
            'As a moped',
            'As a Class M motorcycle',
            'As a bicycle',
            'As a motor-driven cycle requiring Class L privileges',
        ],
        correctAnswer: 'As a motor-driven cycle requiring Class L privileges',
        explanation: 'Although the vehicle satisfies the speed, horsepower, and displacement limits, requiring gear shifts prevents it from qualifying as a moped.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 623,
        category: 'moped classification',
        question: 'A motorized vehicle reaches a maximum speed of only 19 mph within one mile. Does it satisfy the manual’s moped speed criterion?',
        options: [
            'No, because the required range begins at 20 mph',
            'Yes, because it remains below 30 mph',
            'Yes, if its engine is under 50cc',
            'Yes, if it produces no more than 2 horsepower',
        ],
        correctAnswer: 'No, because the required range begins at 20 mph',
        explanation: 'A vehicle capable of reaching only 19 mph does not meet the required moped speed range of 20–30 mph within one mile.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 624,
        category: 'motorcycle classification',
        question: 'What engine-displacement boundary separates a Class L motor-driven cycle from a Class M motorcycle?',
        options: [
            '50cc',
            '100cc',
            '150cc',
            '250cc',
        ],
        correctAnswer: '150cc',
        explanation: 'Class L covers engine displacements from 1cc through 149cc, while Class M begins at 150cc.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 625,
        category: 'moped classification',
        question: 'Which statement best describes a moped under the Illinois manual’s classification system?',
        options: [
            'Every vehicle with an engine below 150cc is automatically a moped',
            'It is a motor-driven cycle that satisfies all four special moped criteria',
            'It is any two-wheeled vehicle traveling below 40 mph',
            'It is a motorcycle with an engine of at least 150cc',
        ],
        correctAnswer: 'It is a motor-driven cycle that satisfies all four special moped criteria',
        explanation: 'Engine size alone does not create a moped classification. The vehicle must also meet the speed, horsepower, and transmission requirements.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
    {
        id: 626,
        category: 'moped classification',
        question: 'What additional motorcycle classification is required to operate a qualifying moped if the operator already holds a current, valid driver’s license?',
        options: [
            'Class M is always required',
            'Class L is always required',
            'Both Classes L and M are required',
            'No additional motorcycle classification is required',
        ],
        correctAnswer: 'No additional motorcycle classification is required',
        explanation: 'A person with any current, valid driver’s license may legally operate a vehicle that qualifies as a moped.',
        source: 'Illinois Motorcycle Operator Manual — Classification Criteria',
    },
        {
        id: 627,
        category: 'motorcycle fit, borrowing, and lending',
        question:
            'When seated on a properly fitting motorcycle, the rider’s:',
        options: [
            'Knees should be completely straight',
            'Feet should reach the ground',
            'Arms should remain fully extended',
            'Feet should barely reach the footrests',
        ],
        correctAnswer: 'Feet should reach the ground',
        explanation:
            'A properly fitting motorcycle allows the rider’s feet to reach the ground while seated.',
        source: 'Illinois Motorcycle Operator Manual — Know Your Motorcycle, page 6',
    },
];

export default questions;
