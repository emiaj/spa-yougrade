'use strict';

angular.module('spaYougradeApp')
  .factory('QuizService', function () {
    // Service logic
    // ...
    // Public API here
    return {
      getByLang: function (lang) {
        var quizzes = [];
        quizzes.push({
            id: 1,
            title:'Learning English with "The Big Bang Theory"',
            description:'Show your knowledge on the English language using videos from The Big Bang Theory',
            thumbnail:'http://img.youtube.com/vi/fRaUVp5DfRk/0.jpg',
            lang:lang
          });
        return quizzes;
      },
      getById: function(id){
        var quiz = {
          id : id,
          name : 'Learning English with "The Big Bang Theory"',
          description:'Show your knowledge on the English language using videos from The Big Bang Theory',
          thumbnail:'http://img.youtube.com/vi/fRaUVp5DfRk/0.jpg',
          questions:[
            {
              description:'In this episode, Sheldon proposes to Raj ' +
              'a variation for the classic "Jokempo" game: instead of ' +
              '"rock-paper-scissors", the variation is ' +
              '"rock-paper-scissors-lizard-spock". ' +
              'In his explanation for the game rules, Sheldon points out ' +
              'that paper beats Spock. How can Spock be defeated by paper?',
              video:'iapcKVn7DdY',
              alternatives:[
                {
                  text:'A large sheet of paper can wrap Spock, in the same way that it ' +
                  'covers rock.'
                },
                {
                  text:'Spock\'s fingers are not as sharp as scissors, and paper can cut his ' +
                  'finger deep.'
                },
                {
                  text:'Being Spock a scientist, a paper (academic research) can refute one ' +
                  'of his theories.'
                },
                {
                  text:'Paper doesn\'t beat Spock. In fact, Sheldon points out that Spock ' +
                  'against paper ends in a tie.'
                }
              ]
            },
            {
              description:'In "The Friendship Algorithm", Sheldon is learning about ' +
              'friendship and draws a flowchart in his white board. He then invites Kripke ' +
              'to go out with him in some activity. ' +
              'Sheldon uses the friendship algorithm, but every activity proposed by ' +
              'Kripke is rejected by Sheldon, and at some point he gets stuck in an ' +
              'infinite loop. How Howard managed to help him get out of the loop?',
              video:'w7j7E7J3f6E',
              alternatives:[
                {
                  text:'Howard convinced Sheldon to practice rock climbing with Kripke.'
                },
                {
                  text:'By drawing a loop counter and an escape to the least ' +
                  'objectionable activity.'
                },
                {
                  text:'In fact, Howard doesn\'t help Sheldon at all. Sheldon decides to ' +
                  'go rock climbing by itself.'
                },
                {
                  text:'Sheldon doesn\'t get out of the infinite loop. He just get a break ' +
                  'to do some internet search before finishing the friendship algorithm path.'
                }
              ]
            },
            {
              description:'At the University cafeteria, Sheldon is discussing with his ' +
              'friend Leonard the problem with teleportation. At the end, Leonard seems ' +
              'to agree with Sheldon that there is a problem. What problem they are ' +
              'talking about?',
              video:'PQzSrAIp-E',
              alternatives:[
                {
                  text:'Both agreed that it would be a problem if the teletransporter ' +
                'had to disintegrate the original Sheldon in order to create the ' +
                'new Sheldon.'
                },
                {
                  text:'Both agreed that it would be a problem if the new Sheldon ' +
                  'created by the teletransporter had no new improvements compared to the ' +
                  'old Sheldon.'
                },
                {
                  text:'Sheldon said it would be a problem if the teletransporter ' +
                  'had to disintegrate the original Sheldon in order to create the ' +
                  'new Sheldon, and Leonard just pretended to care about it.'
                },
                {
                  text:'Sheldon said he would never use a teletransporter, because ' +
                  'this would disintegrate the original Sheldon in order to create ' +
                  'the new Sheldon. Leonard, on the other hand, thought it was a ' +
                  'problem if the new Sheldon was exactly the same as the old Sheldon ' +
                  '(without improvements), but Sheldon didn\'t understand Leonard\'s sarcasm.'
                }
              ]
            },
            {
              description:'In this video, somebody is auctioning a time machine replica ' +
              'from the "Time Machine" movie. Leonard bid $800, and when the auction ends, ' +
              'Sheldon is surprised that no one else bid, since it\'s a piece of sci-fi ' +
              'movie memorabilia. In the end of the video, Sheldon says he understood why ' +
              'no-one else bid. Why he said so?',
              video:'fRaUVp5DfRk',
              alternatives:[
                {
                  text:'Because instead of a miniature, Sheldon found the time ' +
                  'machine replica to be in fact full-sized and extravagant.'
                },
                {
                  text:'Because Sheldon saw it wasn\'t a real time machine.'
                },
                {
                  text:'Because it was nothing like the time machine in the movie.'
                },
                {
                  text:'Because the time machine was damaged.'
                }
              ]
            }
          ]
        };
        return quiz;
      },
      answersFor: function(quizId){
        quizId=quizId;
        return [
          {
            question:0,
            alternative:2
          },
          {
            question:1,
            alternative:1
          },
          {
            question:2,
            alternative:3
          },
          {
            question:3,
            alternative:0
          }
        ];
      }
    };
  });
