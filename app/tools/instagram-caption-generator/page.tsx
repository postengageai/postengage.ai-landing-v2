'use client';

import { useState, useCallback } from 'react';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PenLine, ArrowRight, Copy, Check, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { APP_URL } from '@/lib/constants';

// Metadata is handled via layout.tsx for this client component

type Tone = 'casual' | 'professional' | 'funny' | 'inspirational';
type Niche =
  | 'fitness'
  | 'fashion'
  | 'tech'
  | 'food'
  | 'business'
  | 'travel'
  | 'education'
  | 'beauty';

interface CaptionTemplate {
  caption: string;
  hashtags: string[];
}

const captionTemplates: Record<Niche, Record<Tone, CaptionTemplate[]>> = {
  fitness: {
    casual: [
      {
        caption:
          'No fancy gym, no problem. Just me, my mat, and zero excuses. Some days you crush it, some days you just show up — both count.',
        hashtags: [
          '#FitnessJourney',
          '#GymLife',
          '#WorkoutMotivation',
          '#FitFam',
          '#NoExcuses',
          '#HomeWorkout',
          '#FitnessGoals',
          '#TrainHard',
        ],
      },
      {
        caption:
          'My trainer said "one more set" three sets ago. Pretty sure this is a trust issue now. But here we are, still going.',
        hashtags: [
          '#GymHumor',
          '#FitnessLife',
          '#LegDay',
          '#GymTime',
          '#FitnessFun',
          '#WorkoutDone',
          '#Gains',
          '#GymMotivation',
        ],
      },
      {
        caption:
          'Started this journey for the looks, stayed for the mental health boost. Nothing beats that post-workout clarity.',
        hashtags: [
          '#MentalHealth',
          '#FitnessMotivation',
          '#SelfCare',
          '#WorkoutVibes',
          '#HealthyLifestyle',
          '#MindAndBody',
          '#FitLife',
          '#Wellness',
        ],
      },
    ],
    professional: [
      {
        caption:
          'Consistency beats intensity every single time. In 12 weeks of structured training, the compound effect of showing up daily outperforms any single heroic session.',
        hashtags: [
          '#FitnessProfessional',
          '#PersonalTrainer',
          '#StrengthTraining',
          '#FitnessCoach',
          '#TrainingTips',
          '#FitnessEducation',
          '#ExerciseScience',
          '#FitPro',
        ],
      },
      {
        caption:
          'Progressive overload is not about lifting heavier every session. It is about strategic volume management, recovery optimization, and periodized programming.',
        hashtags: [
          '#StrengthCoach',
          '#FitnessScience',
          '#TrainingProgram',
          '#FitnessExpert',
          '#WorkoutPlan',
          '#FitnessTips',
          '#ProgressiveOverload',
          '#SmartTraining',
        ],
      },
      {
        caption:
          'Your nutrition window matters less than your overall daily intake. Focus on total protein, caloric balance, and nutrient timing as a secondary optimization.',
        hashtags: [
          '#NutritionScience',
          '#FitnessNutrition',
          '#MealPrep',
          '#MacroTracking',
          '#FitnessCoaching',
          '#HealthyEating',
          '#SportNutrition',
          '#FuelYourBody',
        ],
      },
    ],
    funny: [
      {
        caption:
          'My body is a temple. An ancient, crumbling temple that makes weird noises and needs constant maintenance. But a temple nonetheless.',
        hashtags: [
          '#GymMemes',
          '#FitnessHumor',
          '#GymFail',
          '#FunnyFitness',
          '#WorkoutHumor',
          '#GymJokes',
          '#FitAndFunny',
          '#RelatedContent',
        ],
      },
      {
        caption:
          'Day 1 of my fitness journey. Again. For the 47th time. But this time I bought new leggings so it is basically a whole new person.',
        hashtags: [
          '#GymHumor',
          '#FitnessReality',
          '#NewYearNewMe',
          '#GymProblems',
          '#FitnessMemes',
          '#RealTalk',
          '#FunnyGym',
          '#WorkoutProblems',
        ],
      },
      {
        caption:
          'I do not sweat, I sparkle aggressively. Also, who decided burpees were a good idea? That person and I need to have words.',
        hashtags: [
          '#SweatItOut',
          '#BurpeeSurvior',
          '#GymLife',
          '#FitnessComedy',
          '#WorkoutFails',
          '#GymRat',
          '#FitnessHumor',
          '#Relatable',
        ],
      },
    ],
    inspirational: [
      {
        caption:
          'The weight on the bar does not define you. The courage to show up when nobody is watching, when results are slow, when motivation fades — that defines you.',
        hashtags: [
          '#FitnessInspiration',
          '#MotivationMonday',
          '#NeverGiveUp',
          '#BelieveInYourself',
          '#FitnessMotivation',
          '#StayStrong',
          '#Determination',
          '#InspireOthers',
        ],
      },
      {
        caption:
          'A year from now, you will wish you started today. Your future self is counting on the decision you make right now. Make it count.',
        hashtags: [
          '#StartToday',
          '#FitnessGoals',
          '#Motivation',
          '#TransformationTuesday',
          '#FitInspiration',
          '#ChangeYourLife',
          '#GrowthMindset',
          '#Committed',
        ],
      },
      {
        caption:
          'Strong is not just physical. It is waking up when your alarm goes off. It is choosing the salad. It is one more rep when everything says stop.',
        hashtags: [
          '#StrongMindset',
          '#FitnessQuotes',
          '#InnerStrength',
          '#MindOverMatter',
          '#Discipline',
          '#FitnessInspiration',
          '#KeepGoing',
          '#Resilience',
        ],
      },
    ],
  },
  fashion: {
    casual: [
      {
        caption:
          'Outfit check: 90% confidence, 10% hoping nobody notices I am wearing the same jeans as yesterday. Style is all about commitment.',
        hashtags: [
          '#OOTD',
          '#FashionStyle',
          '#CasualFashion',
          '#StyleInspo',
          '#WhatIWore',
          '#FashionDiary',
          '#StreetStyle',
          '#DailyOutfit',
        ],
      },
      {
        caption:
          'My closet said we have nothing to wear. Twenty minutes later, we proved it wrong. The floor, however, is another story.',
        hashtags: [
          '#Fashionista',
          '#OutfitOfTheDay',
          '#StyleBlogger',
          '#FashionLover',
          '#WardrobeGoals',
          '#GetDressed',
          '#FashionVibes',
          '#LookOfTheDay',
        ],
      },
      {
        caption:
          'Thrift find of the century right here. Vintage vibes, modern attitude, and a price tag that did not make my wallet cry.',
        hashtags: [
          '#ThriftFind',
          '#VintageStyle',
          '#SustainableFashion',
          '#ThriftFlip',
          '#SecondHand',
          '#FashionFinds',
          '#ThriftStore',
          '#EcoFashion',
        ],
      },
    ],
    professional: [
      {
        caption:
          'Fashion is the intersection of art and commerce. Understanding seasonal trend cycles, consumer behavior, and brand positioning separates stylists from true fashion strategists.',
        hashtags: [
          '#FashionIndustry',
          '#FashionBusiness',
          '#StyleStrategy',
          '#FashionProfessional',
          '#BrandBuilding',
          '#FashionTrends',
          '#FashionMarketing',
          '#LuxuryFashion',
        ],
      },
      {
        caption:
          'Capsule wardrobes are not minimalism for the sake of it. They are strategic curation — maximizing outfit combinations while minimizing decision fatigue and environmental impact.',
        hashtags: [
          '#CapsuleWardrobe',
          '#SustainableFashion',
          '#ConsciousStyle',
          '#FashionConsulting',
          '#WardrobeEdit',
          '#SlowFashion',
          '#EthicalFashion',
          '#StyleConsultant',
        ],
      },
      {
        caption:
          'The power of a well-fitted blazer goes beyond aesthetics. Studies show that dressing intentionally increases cognitive performance and perceived authority by up to 20%.',
        hashtags: [
          '#PowerDressing',
          '#ProfessionalStyle',
          '#BusinessFashion',
          '#DressForSuccess',
          '#CorporateStyle',
          '#FashionPsychology',
          '#StyleTips',
          '#WardrobeEssentials',
        ],
      },
    ],
    funny: [
      {
        caption:
          'Me: I have nothing to wear. My closet with 200 items: Am I a joke to you? Narrator: She bought another top anyway.',
        hashtags: [
          '#FashionMemes',
          '#ShoppingAddict',
          '#ClosetProblems',
          '#FashionHumor',
          '#RetailTherapy',
          '#Shopaholic',
          '#FunnyFashion',
          '#TooManyClothes',
        ],
      },
      {
        caption:
          'My fashion sense is like my cooking — sometimes it is chef kiss, sometimes the fire department gets involved. Today is a good day though.',
        hashtags: [
          '#FashionFails',
          '#StyleHumor',
          '#OOTD',
          '#FunnyStyle',
          '#FashionRisks',
          '#BoldFashion',
          '#FashionFun',
          '#StyleExperiment',
        ],
      },
      {
        caption:
          'Dressed up with absolutely nowhere to go. So I did what any rational person would do: a full photoshoot in my bathroom mirror.',
        hashtags: [
          '#DressedUp',
          '#MirrorSelfie',
          '#FashionGram',
          '#AllDressedUp',
          '#SelfieTime',
          '#NoPlansStillCute',
          '#FashionMood',
          '#HomeFashion',
        ],
      },
    ],
    inspirational: [
      {
        caption:
          'Style is the quietest way to say something loud. What you wear is not vanity — it is a declaration of who you are becoming.',
        hashtags: [
          '#StyleInspiration',
          '#FashionQuotes',
          '#ExpressYourself',
          '#PersonalStyle',
          '#BeFashionable',
          '#StyleJourney',
          '#FashionForward',
          '#OwnYourStyle',
        ],
      },
      {
        caption:
          'Wear what makes you feel powerful. The right outfit does not just change how others see you — it changes how you see yourself.',
        hashtags: [
          '#Empowerment',
          '#FashionEmpowers',
          '#DressWithPurpose',
          '#ConfidenceIsKey',
          '#StyleMatters',
          '#FashionInspiration',
          '#SelfExpression',
          '#WearYourConfidence',
        ],
      },
      {
        caption:
          'Fashion fades, but style is eternal. Invest in pieces that tell your story, not pieces that follow someone else narrative.',
        hashtags: [
          '#TimelessStyle',
          '#FashionWisdom',
          '#StyleIcon',
          '#ClassicFashion',
          '#FashionPhilosophy',
          '#AuthenticStyle',
          '#FashionLegacy',
          '#BeYourself',
        ],
      },
    ],
  },
  tech: {
    casual: [
      {
        caption:
          'Just spent 3 hours debugging only to find a missing semicolon. Peak developer experience right here. Time for coffee number four.',
        hashtags: [
          '#DevLife',
          '#CodingLife',
          '#Programming',
          '#TechHumor',
          '#Developer',
          '#CodeNewbie',
          '#WebDev',
          '#SoftwareEngineer',
        ],
      },
      {
        caption:
          'New setup, who dis? Finally upgraded my workspace and honestly the productivity boost is real. Or maybe I just feel cooler.',
        hashtags: [
          '#TechSetup',
          '#DeskSetup',
          '#WorkFromHome',
          '#TechGear',
          '#ProductivityHack',
          '#HomeOffice',
          '#DevSetup',
          '#GadgetLover',
        ],
      },
      {
        caption:
          'Trying to explain to my family what I do for a living. "I talk to computers." Close enough for Thanksgiving dinner.',
        hashtags: [
          '#TechLife',
          '#DeveloperHumor',
          '#CodingMemes',
          '#TechWorld',
          '#Programmer',
          '#TechCommunity',
          '#NerdLife',
          '#GeekAndProud',
        ],
      },
    ],
    professional: [
      {
        caption:
          'AI is not replacing developers — it is amplifying them. The teams that adopt AI-assisted development now will have a compounding advantage over the next five years.',
        hashtags: [
          '#AIDevelopment',
          '#TechTrends',
          '#SoftwareEngineering',
          '#AITools',
          '#TechLeadership',
          '#FutureOfTech',
          '#DevTools',
          '#Innovation',
        ],
      },
      {
        caption:
          'Scalability is not an afterthought — it is a design principle. Every architectural decision you make today determines whether your system survives tomorrow growth.',
        hashtags: [
          '#SystemDesign',
          '#TechArchitecture',
          '#Scalability',
          '#CloudComputing',
          '#DevOps',
          '#SoftwareArchitect',
          '#EngineeringExcellence',
          '#TechStrategy',
        ],
      },
      {
        caption:
          'The best code is the code you do not write. Ruthless simplification, strategic abstraction, and knowing when not to build — these separate good engineers from great ones.',
        hashtags: [
          '#CleanCode',
          '#SoftwareCraft',
          '#CodingBestPractices',
          '#TechWisdom',
          '#EngineeringMindset',
          '#CodeQuality',
          '#DeveloperTips',
          '#TechProfessional',
        ],
      },
    ],
    funny: [
      {
        caption:
          'My code works and I have no idea why. My code does not work and I have no idea why. Welcome to the emotional rollercoaster of programming.',
        hashtags: [
          '#ProgrammerHumor',
          '#CodingMemes',
          '#DevMemes',
          '#BugFree',
          '#DebuggingLife',
          '#CodeHumor',
          '#TechMemes',
          '#DeveloperProblems',
        ],
      },
      {
        caption:
          'Stack Overflow should add a "crying" reaction. Sometimes the answer is right there but your brain has left the building three hours ago.',
        hashtags: [
          '#StackOverflow',
          '#DevProblems',
          '#CodingStruggles',
          '#TechFunny',
          '#ProgrammerLife',
          '#HelpMeDebug',
          '#CodeStress',
          '#DevHumor',
        ],
      },
      {
        caption:
          'My Git commit messages have gone from "Fixed bug" to "I think this works maybe" to "Please work" to "I am begging you". Character development.',
        hashtags: [
          '#GitProblems',
          '#DevMemes',
          '#ProgrammerHumor',
          '#VersionControl',
          '#CodingLife',
          '#GitCommit',
          '#DevJokes',
          '#TechComedy',
        ],
      },
    ],
    inspirational: [
      {
        caption:
          'Every expert was once a beginner staring at a blinking cursor. The difference is they kept typing. Your future in tech starts with your next line of code.',
        hashtags: [
          '#LearnToCode',
          '#TechInspiration',
          '#CodingJourney',
          '#DeveloperMotivation',
          '#TechCareer',
          '#NeverStopLearning',
          '#CodeNewbie',
          '#GrowInTech',
        ],
      },
      {
        caption:
          'Technology is the great equalizer. A kid with a laptop in a small town can build something that changes millions of lives. That kid could be you.',
        hashtags: [
          '#TechForGood',
          '#Innovation',
          '#StartupLife',
          '#BuildSomething',
          '#TechDreams',
          '#Entrepreneurship',
          '#DigitalFuture',
          '#MakeAnImpact',
        ],
      },
      {
        caption:
          'The best time to learn a new technology was yesterday. The second best time is now. Every hour invested in learning compounds into career-changing returns.',
        hashtags: [
          '#LifelongLearning',
          '#TechGrowth',
          '#SkillBuilding',
          '#DevCommunity',
          '#CareerGrowth',
          '#TechEducation',
          '#ContinuousLearning',
          '#InvestInYourself',
        ],
      },
    ],
  },
  food: {
    casual: [
      {
        caption:
          'Made this from scratch and only set off the smoke alarm once. I call that progress. Swipe for the before and after (the after is much better, promise).',
        hashtags: [
          '#HomeCooking',
          '#FoodieLife',
          '#CookingAtHome',
          '#FoodLover',
          '#Homemade',
          '#InstaFood',
          '#FoodGram',
          '#CookingFun',
        ],
      },
      {
        caption:
          'The secret ingredient is always butter. And love. But mostly butter. My grandmother would be proud (and probably add more butter).',
        hashtags: [
          '#Foodie',
          '#ComfortFood',
          '#FoodPhotography',
          '#YummyFood',
          '#FoodBlog',
          '#EatWell',
          '#HomeChef',
          '#FoodIsLove',
        ],
      },
      {
        caption:
          'Meal prep Sunday hitting different this week. Five days of lunches done in two hours. Future me is going to be so grateful (and well-fed).',
        hashtags: [
          '#MealPrep',
          '#MealPrepSunday',
          '#HealthyEating',
          '#FoodPrep',
          '#CleanEating',
          '#NutritionGoals',
          '#HealthyMeals',
          '#PrepLife',
        ],
      },
    ],
    professional: [
      {
        caption:
          'Plating is not decoration — it is communication. Every element on the plate should tell a story: the origin of ingredients, the technique applied, and the emotion intended.',
        hashtags: [
          '#ChefLife',
          '#FoodPlating',
          '#CulinaryArts',
          '#GourmetFood',
          '#FinedinIng',
          '#ChefSkills',
          '#FoodArt',
          '#ProfessionalChef',
        ],
      },
      {
        caption:
          'Fermentation is having a renaissance in modern cuisine. Understanding the science behind lacto-fermentation opens up entire flavor profiles previously inaccessible through traditional cooking.',
        hashtags: [
          '#Fermentation',
          '#FoodScience',
          '#CulinaryInnovation',
          '#ChefTechniques',
          '#FoodCulture',
          '#ModernCuisine',
          '#FoodResearch',
          '#GastronomyArt',
        ],
      },
      {
        caption:
          'Restaurant margins run on precision. A 2% improvement in food cost management can mean the difference between thriving and closing. Data-driven menu engineering is not optional anymore.',
        hashtags: [
          '#RestaurantBusiness',
          '#FoodIndustry',
          '#MenuEngineering',
          '#RestaurantManagement',
          '#FoodCost',
          '#HospitalityPro',
          '#ChefBusiness',
          '#FoodBiz',
        ],
      },
    ],
    funny: [
      {
        caption:
          'Recipe said "cook until golden brown." Mine went straight to "charcoal black." I have invented a new shade apparently. The dog still ate it though.',
        hashtags: [
          '#CookingFail',
          '#FoodFunny',
          '#KitchenDisasters',
          '#FoodMemes',
          '#BurntFood',
          '#ChefFail',
          '#FunnyFood',
          '#NailedIt',
        ],
      },
      {
        caption:
          'My diet starts Monday. It is currently Saturday. This means I have approximately 37 hours to eat everything in my kitchen. Challenge accepted.',
        hashtags: [
          '#DietStartsMonday',
          '#FoodHumor',
          '#EatAllTheThings',
          '#FoodAddict',
          '#CheatDay',
          '#FoodMood',
          '#WeekendVibes',
          '#FunnyFoodie',
        ],
      },
      {
        caption:
          'I follow a very strict diet. It is called "if it is in front of me, I will eat it." So far it is going exceptionally well. Five stars, would recommend.',
        hashtags: [
          '#FoodHumor',
          '#FoodyJokes',
          '#EatingForTwo',
          '#FoodLove',
          '#FunnyMemes',
          '#FoodieProblems',
          '#NoFilterNeeded',
          '#JustEat',
        ],
      },
    ],
    inspirational: [
      {
        caption:
          'Food is the universal language of love. Every dish carries a story — of the hands that grew it, the culture that seasoned it, and the table that shared it.',
        hashtags: [
          '#FoodIsLove',
          '#CulinaryJourney',
          '#FoodCulture',
          '#ShareAMeal',
          '#FoodStories',
          '#CookWithLove',
          '#FoodInspiration',
          '#NourishBody',
        ],
      },
      {
        caption:
          'The best meals I have ever had were not in Michelin-starred restaurants. They were at crowded family tables where the food was simple and the laughter was endless.',
        hashtags: [
          '#FamilyMeals',
          '#FoodMemories',
          '#HomeCooking',
          '#FoodAndFamily',
          '#SimpleFood',
          '#GratefulHeart',
          '#FoodLove',
          '#MealsThatMatter',
        ],
      },
      {
        caption:
          'Learning to cook is one of the most empowering skills you can develop. You stop depending on others and start creating nourishment on your own terms.',
        hashtags: [
          '#LearnToCook',
          '#Empowerment',
          '#CookingSkills',
          '#FoodFreedom',
          '#SelfSufficient',
          '#CookingInspiration',
          '#KitchenConfidence',
          '#FoodEmpowerment',
        ],
      },
    ],
  },
  business: {
    casual: [
      {
        caption:
          'Monday morning coffee tastes different when you are building something you actually care about. Small business energy is unmatched.',
        hashtags: [
          '#SmallBusiness',
          '#Entrepreneur',
          '#BusinessLife',
          '#StartupGrind',
          '#HustleHard',
          '#BusinessOwner',
          '#BossLife',
          '#MondayMotivation',
        ],
      },
      {
        caption:
          'Just had a customer DM me saying our product changed their workflow. That one message made the last 6 months of late nights worth it.',
        hashtags: [
          '#CustomerLove',
          '#SmallBusinessOwner',
          '#Entrepreneurship',
          '#BusinessGrowth',
          '#CustomerFeedback',
          '#StartupLife',
          '#BusinessWins',
          '#GrowthMindset',
        ],
      },
      {
        caption:
          'Behind every "overnight success" is about 2 years of nobody caring, 500 rejections, and an unhealthy amount of coffee. But we are here now.',
        hashtags: [
          '#StartupReality',
          '#BusinessJourney',
          '#EntrepreneurLife',
          '#RealTalk',
          '#BusinessTruth',
          '#FounderLife',
          '#Persistence',
          '#KeepGoing',
        ],
      },
    ],
    professional: [
      {
        caption:
          'Revenue is vanity, profit is sanity, cash flow is reality. The businesses that survive downturns are the ones that master unit economics before scaling.',
        hashtags: [
          '#BusinessStrategy',
          '#StartupAdvice',
          '#FinancialLiteracy',
          '#BusinessGrowth',
          '#UnitEconomics',
          '#Scaling',
          '#BusinessLeadership',
          '#CFOInsights',
        ],
      },
      {
        caption:
          'Your brand is not your logo. It is the promise you keep. Every customer interaction, every support ticket, every post — they all either build or erode trust.',
        hashtags: [
          '#BrandStrategy',
          '#BusinessBranding',
          '#MarketingStrategy',
          '#BrandBuilding',
          '#CustomerExperience',
          '#TrustInBusiness',
          '#BrandIdentity',
          '#MarketingTips',
        ],
      },
      {
        caption:
          'The most underrated growth lever in 2026: speed of execution. While competitors debate in meetings, the fastest teams are shipping, learning, and iterating in real time.',
        hashtags: [
          '#BusinessExecution',
          '#GrowthHacking',
          '#StartupStrategy',
          '#BusinessInnovation',
          '#LeanStartup',
          '#AgileMethodology',
          '#MoveFirst',
          '#CompetitiveEdge',
        ],
      },
    ],
    funny: [
      {
        caption:
          'My business plan: step 1 — have an idea. Step 2 — panic. Step 3 — Google everything. Step 4 — pretend I know what I am doing. Repeat forever.',
        hashtags: [
          '#EntrepreneurMemes',
          '#StartupHumor',
          '#BusinessFunny',
          '#FounderProblems',
          '#SmallBizLife',
          '#HustleHumor',
          '#StartupMemes',
          '#BusinessReality',
        ],
      },
      {
        caption:
          'LinkedIn says I should be "disrupting industries" and "leveraging synergies." I am just trying to answer my emails before lunch. We are not the same.',
        hashtags: [
          '#LinkedInHumor',
          '#BusinessMemes',
          '#CorporateLife',
          '#BusinessHumor',
          '#OfficeLife',
          '#ProfessionalProblems',
          '#WorkFunny',
          '#CorporateMemes',
        ],
      },
      {
        caption:
          'Running a business is just making it up as you go with progressively nicer fonts. Started in Comic Sans, now we are in Helvetica. Growth.',
        hashtags: [
          '#BusinessHumor',
          '#StartupJokes',
          '#EntrepreneurFunny',
          '#SmallBizHumor',
          '#BusinessGrowth',
          '#DesignMatters',
          '#FounderHumor',
          '#RealBusiness',
        ],
      },
    ],
    inspirational: [
      {
        caption:
          'The biggest risk is not starting. Every empire began with a single decision to try. Your idea does not need to be perfect — it needs to be started.',
        hashtags: [
          '#JustStart',
          '#Entrepreneurship',
          '#BusinessInspiration',
          '#StartupMotivation',
          '#TakeTheLeap',
          '#DreamBig',
          '#BusinessDreams',
          '#FounderInspiration',
        ],
      },
      {
        caption:
          'Build a business that solves a problem you genuinely care about. Passion is not just fuel for the early days — it is the foundation for the difficult ones.',
        hashtags: [
          '#PurposeDriven',
          '#BusinessPurpose',
          '#EntrepreneurMindset',
          '#BuildWithPurpose',
          '#BusinessVision',
          '#StartSomething',
          '#ImpactBusiness',
          '#MissionDriven',
        ],
      },
      {
        caption:
          'Failure is not the opposite of success. It is the curriculum. Every setback teaches you something a textbook never could. Keep building.',
        hashtags: [
          '#FailForward',
          '#BusinessLessons',
          '#GrowthMindset',
          '#Resilience',
          '#EntrepreneurJourney',
          '#LearnAndGrow',
          '#BusinessWisdom',
          '#NeverQuit',
        ],
      },
    ],
  },
  travel: {
    casual: [
      {
        caption:
          'Lost in the best way possible. No GPS, no itinerary, just vibes and a questionable sense of direction. The best memories are unplanned.',
        hashtags: [
          '#TravelVibes',
          '#Wanderlust',
          '#ExploreMore',
          '#TravelGram',
          '#Adventure',
          '#TravelLife',
          '#GetLost',
          '#TravelAddict',
        ],
      },
      {
        caption:
          'Airport coffee hits different when you are headed somewhere new. That first sip of "I am actually doing this" is unmatched.',
        hashtags: [
          '#AirportLife',
          '#TravelDay',
          '#Traveling',
          '#TravelMood',
          '#JetSetter',
          '#TravelTime',
          '#OnTheGo',
          '#NewAdventure',
        ],
      },
      {
        caption:
          'My budget said hotel. My heart said beachfront villa. My credit card said we will talk about this later. Worth every penny.',
        hashtags: [
          '#TravelLife',
          '#VacationMode',
          '#BeachVibes',
          '#TravelBudget',
          '#LuxuryTravel',
          '#TreatYourself',
          '#TravelSplurge',
          '#Paradise',
        ],
      },
    ],
    professional: [
      {
        caption:
          'Sustainable tourism is not a trend — it is a necessity. Travelers in 2026 are actively choosing eco-certified accommodations and low-impact experiences over mass tourism.',
        hashtags: [
          '#SustainableTravel',
          '#EcoTourism',
          '#ResponsibleTravel',
          '#TravelIndustry',
          '#GreenTravel',
          '#ConsciousTravel',
          '#TourismManagement',
          '#TravelTrends',
        ],
      },
      {
        caption:
          'The digital nomad economy has matured beyond coworking spaces. Countries are now competing for remote workers with visa programs, tax incentives, and purpose-built infrastructure.',
        hashtags: [
          '#DigitalNomad',
          '#RemoteWork',
          '#TravelAndWork',
          '#NomadLife',
          '#LocationIndependent',
          '#FutureOfWork',
          '#RemoteLifestyle',
          '#GlobalWorkforce',
        ],
      },
      {
        caption:
          'Content creation while traveling requires planning that goes beyond "wing it." Shot lists, golden hour timing, and local permits can make or break a travel content strategy.',
        hashtags: [
          '#TravelContent',
          '#ContentCreator',
          '#TravelBlogger',
          '#TravelPhotography',
          '#ContentStrategy',
          '#TravelMedia',
          '#ProTravel',
          '#TravelBusiness',
        ],
      },
    ],
    funny: [
      {
        caption:
          'Packed for a week. Used three outfits. Wore the same shirt four times. Travel is about experiences, not wardrobe variety, right?',
        hashtags: [
          '#TravelPacking',
          '#TravelFails',
          '#PackingProblems',
          '#TravelHumor',
          '#OverPacked',
          '#TravelMemes',
          '#SuitcaseStruggles',
          '#TravelFunny',
        ],
      },
      {
        caption:
          'Google Maps said 10 minutes. The hill said 45 minutes and a near-death experience. Always trust the hill. The hill does not lie.',
        hashtags: [
          '#TravelFail',
          '#HikingAdventure',
          '#GoogleLied',
          '#TravelProblems',
          '#FunnyTravel',
          '#AdventureTime',
          '#TravelStruggles',
          '#HikingHumor',
        ],
      },
      {
        caption:
          'My travel photography: expectation vs reality. Expected: National Geographic. Got: blurry thumb with a sunset somewhere in the background. Art.',
        hashtags: [
          '#TravelPhotography',
          '#ExpectationVsReality',
          '#TravelMemes',
          '#PhotoFail',
          '#TravelFunny',
          '#Wanderlust',
          '#TravelHumor',
          '#CameraFail',
        ],
      },
    ],
    inspirational: [
      {
        caption:
          'Travel is the only thing you buy that makes you richer. Every new place rewires your perspective, humbles your assumptions, and expands your definition of home.',
        hashtags: [
          '#TravelInspiration',
          '#SeeTheWorld',
          '#TravelQuotes',
          '#ExploreTheWorld',
          '#TravelDreams',
          '#Wanderlust',
          '#TravelMore',
          '#WorldTraveler',
        ],
      },
      {
        caption:
          'The world is too big to stay in one place and life is too short to do just one thing. Book the ticket. Take the leap. The rest writes itself.',
        hashtags: [
          '#BookTheTicket',
          '#TravelMotivation',
          '#AdventureAwaits',
          '#LiveFullly',
          '#TravelIsLife',
          '#ExploreEverything',
          '#LifeIsShort',
          '#GoExplore',
        ],
      },
      {
        caption:
          'You do not need a perfect plan to travel. You need courage, curiosity, and the willingness to be uncomfortable. That is where the magic happens.',
        hashtags: [
          '#TravelCourage',
          '#StepOutside',
          '#TravelWisdom',
          '#EmbraceTheUnknown',
          '#TravelInspired',
          '#BeBrave',
          '#TravelGrowth',
          '#NewHorizons',
        ],
      },
    ],
  },
  education: {
    casual: [
      {
        caption:
          'Just explained quantum physics to my class using candy bars and nobody fell asleep. Calling that a win. Teaching is 50% knowledge, 50% improv.',
        hashtags: [
          '#TeacherLife',
          '#Education',
          '#Teaching',
          '#TeacherHumor',
          '#ClassroomVibes',
          '#EducationMatters',
          '#TeachersOfIG',
          '#LearningIsFun',
        ],
      },
      {
        caption:
          'That moment when a student finally gets it and their face lights up. That right there — that is why we do this. Every late night grading is worth it.',
        hashtags: [
          '#TeachingMoments',
          '#TeacherInspiration',
          '#EducationFirst',
          '#StudentSuccess',
          '#LoveTeaching',
          '#TeacherMotivation',
          '#ClassroomWins',
          '#Educator',
        ],
      },
      {
        caption:
          'Study tip that actually changed my life: teach it to someone else. If you can not explain it simply, you do not understand it well enough.',
        hashtags: [
          '#StudyTips',
          '#LearningHacks',
          '#StudentLife',
          '#Education',
          '#StudyMotivation',
          '#LearnSmart',
          '#AcademicSuccess',
          '#StudyWithMe',
        ],
      },
    ],
    professional: [
      {
        caption:
          'Microlearning is outperforming traditional lecture formats by 17% in retention studies. The future of education is not longer sessions — it is smarter, shorter, and more interactive ones.',
        hashtags: [
          '#EdTech',
          '#Microlearning',
          '#EducationTrends',
          '#LearningDesign',
          '#EducationalInnovation',
          '#OnlineLearning',
          '#InstructionalDesign',
          '#FutureOfEducation',
        ],
      },
      {
        caption:
          'AI in education is not about replacing teachers. It is about giving every student access to personalized learning paths that adapt to their pace, style, and goals.',
        hashtags: [
          '#AIInEducation',
          '#PersonalizedLearning',
          '#EdTech',
          '#EducationReform',
          '#AdaptiveLearning',
          '#TeachWithTech',
          '#EducationTechnology',
          '#SmartLearning',
        ],
      },
      {
        caption:
          'The gap between education and employability is closing. Skills-based credentials, project portfolios, and competency mapping are replacing traditional degree requirements across industries.',
        hashtags: [
          '#SkillsBasedHiring',
          '#EducationToEmployment',
          '#CareerReadiness',
          '#HigherEducation',
          '#WorkforceDevelopment',
          '#LifelongLearning',
          '#FutureSkills',
          '#EducationReform',
        ],
      },
    ],
    funny: [
      {
        caption:
          'Student: "When will we use this in real life?" Me: "You will use the discipline of learning it for the rest of your life." Student: stares blankly.',
        hashtags: [
          '#TeacherMemes',
          '#EducationHumor',
          '#ClassroomFunny',
          '#TeacherProblems',
          '#StudentQuestions',
          '#TeachingLife',
          '#SchoolHumor',
          '#FunnyTeacher',
        ],
      },
      {
        caption:
          'My lesson plan: organized, detailed, timed to perfection. Reality: complete chaos by minute three. Improvising is basically a teaching superpower at this point.',
        hashtags: [
          '#LessonPlanning',
          '#TeacherReality',
          '#EducationMemes',
          '#TeachingChaos',
          '#ClassroomReality',
          '#TeacherFunny',
          '#SchoolDays',
          '#TeacherStruggles',
        ],
      },
      {
        caption:
          'Group project: one person does all the work, one disappears, one brings snacks, one asks "what are we doing?" Some things never change from school to work.',
        hashtags: [
          '#GroupProject',
          '#StudentHumor',
          '#SchoolMemes',
          '#EducationFunny',
          '#Relatable',
          '#UniversityLife',
          '#SchoolLife',
          '#GroupWorkProblems',
        ],
      },
    ],
    inspirational: [
      {
        caption:
          'Education is not the filling of a pail, but the lighting of a fire. Every great teacher knows the goal is not answers — it is curiosity.',
        hashtags: [
          '#EducationInspiration',
          '#InspireToLearn',
          '#TeacherQuotes',
          '#LoveOfLearning',
          '#Curiosity',
          '#TeachingMatters',
          '#EducateAndInspire',
          '#PowerOfEducation',
        ],
      },
      {
        caption:
          'A good teacher can change a life forever. They see potential where others see struggle. They plant seeds that bloom years after the final grade is given.',
        hashtags: [
          '#TeachersChangeLife',
          '#EducationQuotes',
          '#TeacherAppreciation',
          '#MakingADifference',
          '#EducationIsPower',
          '#InspiringTeachers',
          '#ThankATeacher',
          '#EducatorImpact',
        ],
      },
      {
        caption:
          'The most powerful investment you will ever make is in your own education. Knowledge compounds. Skills compound. And unlike money, they can never be taken from you.',
        hashtags: [
          '#InvestInYourself',
          '#LifelongLearner',
          '#EducationFirst',
          '#KnowledgeIsPower',
          '#PersonalGrowth',
          '#SelfEducation',
          '#NeverStopGrowing',
          '#LearnEveryDay',
        ],
      },
    ],
  },
  beauty: {
    casual: [
      {
        caption:
          'Skincare routine complete. Only took 27 steps, 45 minutes, and a small fortune in serums. But this glow? Absolutely priceless.',
        hashtags: [
          '#SkincareRoutine',
          '#BeautyTips',
          '#GlowUp',
          '#Skincare',
          '#BeautyBlogger',
          '#SkincareLover',
          '#BeautyGram',
          '#SelfCareSunday',
        ],
      },
      {
        caption:
          'New lip color, new personality. Is it just me or does the right shade genuinely change your entire mood? This one screams confidence.',
        hashtags: [
          '#LipColor',
          '#MakeupLover',
          '#BeautyAddict',
          '#Lipstick',
          '#MakeupOfTheDay',
          '#BeautyFavorites',
          '#MOTD',
          '#MakeupInspo',
        ],
      },
      {
        caption:
          'My hair finally cooperated today and obviously I have nowhere to go. The universe has jokes. But at least I got photos.',
        hashtags: [
          '#GoodHairDay',
          '#HairGoals',
          '#BeautyLife',
          '#HairInspo',
          '#HairCare',
          '#BeautyVibes',
          '#HairDay',
          '#NaturalHair',
        ],
      },
    ],
    professional: [
      {
        caption:
          'Clean beauty is evolving beyond ingredient avoidance. The next wave is biotech-driven formulations that outperform traditional synthetics while meeting the highest safety and sustainability standards.',
        hashtags: [
          '#CleanBeauty',
          '#BeautyIndustry',
          '#CosmeticScience',
          '#BeautyInnovation',
          '#SkinScience',
          '#BeautyTech',
          '#SustainableBeauty',
          '#BeautyFormulation',
        ],
      },
      {
        caption:
          'Understanding your skin barrier is the foundation of any effective routine. pH balance, ceramide levels, and microbiome health determine how your skin responds to every product you apply.',
        hashtags: [
          '#SkinBarrier',
          '#DermatologyTips',
          '#SkinScience',
          '#SkincareEducation',
          '#BeautyProfessional',
          '#SkinHealth',
          '#EvidenceBased',
          '#ProSkincare',
        ],
      },
      {
        caption:
          'The global beauty market is projected to reach $580B by 2027. The brands winning are those investing in personalization, inclusivity, and technology-driven customer experiences.',
        hashtags: [
          '#BeautyBusiness',
          '#BeautyMarket',
          '#CosmeticsIndustry',
          '#BeautyTrends',
          '#BeautyMarketing',
          '#BeautyBrand',
          '#IndustryInsights',
          '#BeautyEntrepreneur',
        ],
      },
    ],
    funny: [
      {
        caption:
          'Tried the "no makeup" makeup look. Used 14 products to look like I am wearing nothing. The irony is not lost on me. Neither is the $200.',
        hashtags: [
          '#NoMakeupMakeup',
          '#BeautyMemes',
          '#MakeupHumor',
          '#BeautyFunny',
          '#MakeupReality',
          '#BeautyTruth',
          '#CosmeticComedy',
          '#MakeupStruggles',
        ],
      },
      {
        caption:
          'My skincare collection has more steps than my career plan. But at least my pores are minimized even if my life is not organized. Priorities.',
        hashtags: [
          '#SkincareAddict',
          '#BeautyHumor',
          '#SkincareJunkie',
          '#FunnyBeauty',
          '#SkincareMemes',
          '#BeautyObsessed',
          '#ProductJunkie',
          '#SkincareHumor',
        ],
      },
      {
        caption:
          'Winged eyeliner attempt number one: disaster. Attempt number two: worse somehow. Attempt number three: one eye is perfect, the other is abstract art.',
        hashtags: [
          '#EyelinerStruggles',
          '#MakeupFails',
          '#BeautyFails',
          '#WingedLiner',
          '#MakeupMemes',
          '#BeautyProblems',
          '#EyelinerGoals',
          '#MakeupFunny',
        ],
      },
    ],
    inspirational: [
      {
        caption:
          'Beauty is not about perfection — it is about expression. Your makeup, your skin, your hair — they are all canvases for who you choose to be today.',
        hashtags: [
          '#BeautyInspiration',
          '#SelfExpression',
          '#BeautyIsYou',
          '#InnerBeauty',
          '#BeautyEmpowerment',
          '#LoveYourself',
          '#BeautyStandards',
          '#AuthenticBeauty',
        ],
      },
      {
        caption:
          'Your skincare journey is exactly that — a journey. Some days your skin glows. Some days it does not. Both are part of the process. Be patient with yourself.',
        hashtags: [
          '#SkinJourney',
          '#SkinPositivity',
          '#BeautyJourney',
          '#SelfLove',
          '#SkincareGoals',
          '#PatienceIsKey',
          '#BeautyWithin',
          '#SkinConfidence',
        ],
      },
      {
        caption:
          'Confidence is the most beautiful thing you can wear. Every product, every routine, every ritual — it all comes back to how you feel about yourself.',
        hashtags: [
          '#ConfidenceIsBeauty',
          '#BeautyQuotes',
          '#InnerGlow',
          '#SelfConfidence',
          '#BeautyFromWithin',
          '#GlowFromInside',
          '#LoveYourSkin',
          '#BeautyInspired',
        ],
      },
    ],
  },
};

const niches: { value: Niche; label: string }[] = [
  { value: 'fitness', label: 'Fitness & Health' },
  { value: 'fashion', label: 'Fashion & Style' },
  { value: 'tech', label: 'Tech & Software' },
  { value: 'food', label: 'Food & Cooking' },
  { value: 'business', label: 'Business & Entrepreneurship' },
  { value: 'travel', label: 'Travel & Adventure' },
  { value: 'education', label: 'Education & Learning' },
  { value: 'beauty', label: 'Beauty & Skincare' },
];

const tones: { value: Tone; label: string }[] = [
  { value: 'casual', label: 'Casual' },
  { value: 'professional', label: 'Professional' },
  { value: 'funny', label: 'Funny' },
  { value: 'inspirational', label: 'Inspirational' },
];

export default function CaptionGeneratorPage() {
  const [niche, setNiche] = useState<Niche | ''>('');
  const [tone, setTone] = useState<Tone | ''>('');
  const [keywords, setKeywords] = useState('');
  const [captions, setCaptions] = useState<CaptionTemplate[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [generated, setGenerated] = useState(false);

  function handleGenerate() {
    if (!niche || !tone) return;
    const templates = captionTemplates[niche][tone];
    setCaptions(templates);
    setGenerated(true);
    setCopiedIndex(null);
  }

  const handleCopy = useCallback(
    async (text: string, hashtags: string[], index: number) => {
      const full = `${text}\n\n${hashtags.join(' ')}`;
      await navigator.clipboard.writeText(full);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    },
    []
  );

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <LandingHeader />

      <main className='pt-32 pb-20'>
        {/* Hero */}
        <section className='px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl text-center'>
            <div className='mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary uppercase tracking-wider'>
              Free Tool
            </div>
            <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
              Instagram Caption Generator
            </h1>
            <p className='mt-4 text-lg text-muted-foreground max-w-xl mx-auto'>
              Generate scroll-stopping captions with hashtags for any niche.
              Choose your tone, click generate, and copy.
            </p>
          </div>
        </section>

        {/* Generator */}
        <section className='mt-16 px-4 sm:px-6'>
          <div className='mx-auto max-w-2xl'>
            <Card className='border-border'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <PenLine className='h-5 w-5 text-primary' />
                  Generate Captions
                </CardTitle>
                <CardDescription>
                  Select your niche and tone to get started
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='space-y-2'>
                  <Label>Niche / Topic</Label>
                  <Select
                    value={niche}
                    onValueChange={v => setNiche(v as Niche)}
                  >
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select your niche' />
                    </SelectTrigger>
                    <SelectContent>
                      {niches.map(n => (
                        <SelectItem key={n.value} value={n.value}>
                          {n.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className='space-y-2'>
                  <Label>Tone</Label>
                  <Select value={tone} onValueChange={v => setTone(v as Tone)}>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select tone' />
                    </SelectTrigger>
                    <SelectContent>
                      {tones.map(t => (
                        <SelectItem key={t.value} value={t.value}>
                          {t.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='keywords'>
                    Keywords{' '}
                    <span className='text-muted-foreground font-normal'>
                      (optional)
                    </span>
                  </Label>
                  <Input
                    id='keywords'
                    placeholder='e.g. morning routine, productivity'
                    value={keywords}
                    onChange={e => setKeywords(e.target.value)}
                  />
                </div>
                <Button
                  onClick={handleGenerate}
                  className='w-full'
                  size='lg'
                  disabled={!niche || !tone}
                >
                  Generate Captions
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            {generated && captions.length > 0 && (
              <div className='mt-8 space-y-6'>
                <h2 className='text-xl font-semibold'>
                  Your Generated Captions
                </h2>
                {captions.map((item, index) => (
                  <Card key={index} className='border-border'>
                    <CardContent className='pt-6'>
                      <p className='text-sm leading-relaxed mb-4'>
                        {item.caption}
                      </p>
                      <div className='flex flex-wrap gap-1.5 mb-4'>
                        {item.hashtags.map(tag => (
                          <span
                            key={tag}
                            className='text-xs text-primary bg-primary/10 rounded-full px-2 py-0.5'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button
                        variant='outline'
                        size='sm'
                        onClick={() =>
                          handleCopy(item.caption, item.hashtags, index)
                        }
                        className='gap-1.5'
                      >
                        {copiedIndex === index ? (
                          <>
                            <Check className='h-3.5 w-3.5' />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className='h-3.5 w-3.5' />
                            Copy Caption & Hashtags
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className='mt-32 px-4 sm:px-6'>
          <div className='mx-auto max-w-3xl text-center'>
            <div className='mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10'>
              <Sparkles className='h-7 w-7 text-primary' />
            </div>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-4'>
              Let PostEngage AI write your DM replies too
            </h2>
            <p className='text-lg text-muted-foreground mb-8 max-w-xl mx-auto'>
              Great captions bring people in. PostEngage keeps them engaged with
              AI-powered comment replies and personalized DMs.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Button size='lg' asChild>
                <Link href={`${APP_URL}/signup`}>
                  Try PostEngage Free
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button size='lg' variant='outline' asChild>
                <Link href='/tools'>All Free Tools</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* JSON-LD */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Instagram Caption Generator',
            description:
              'Generate engaging Instagram captions with hashtags for any niche and tone.',
            url: 'https://postengage.ai/tools/instagram-caption-generator',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          }),
        }}
      />

      <LandingFooter />
    </div>
  );
}
