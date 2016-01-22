# JAVASCRIPT layout

### PAGE 1:
***Input:***
- *NAME*
- *CELEBRITY*
- *DRINK*

### PAGE 2:
***Create:***
- *NUMBER OF PICKS*
- *CARD ARRAY*
- *TOTAL USER DRINKS*
- *TOTAL COMPUTER DRINKS*

***Display your opponent***

**User Intro function()**

- Display an insult from your opponent
- Display a deck of cards
- Display instructions to pick a card
- Flip over a card
- Remove card from *CARD ARRAY*
- Display flipped over card
- Pass to
 - **User Pick function()**

**User Pick function()**
- Display buttons to pick High or Low or Pass
 - Store *USER SELECTION*
- If *USER SELECTION* = High/Low, pass to:
  - **User    NewCard function()**
- If *USER SELECTION* = Pass, pass to:
   - **Computer Intro function()**

**User NewCard function()**
- Randomize number to flip over a new card
- Remove card from *CARD ARRAY*
- Decide if *USER SELECTION* was correct or incorrect
- If *USER SELECTION* is correct pass to:
 - **User Pick function()**
- If *USER SELECTION* is incorrect pass to:
 - **User Incorrect Pick function()**

**User Incorrect Pick function()**
- Display insult from opponent
- Display drinking image
- Add *NUMBER OF PICKS* to *TOTAL DRINKS*
- Clear cards from screen
- Reset *CARD ARRAY*
- Pass to:
   - **Computer Intro function()**

**Computer Intro function()**
- Display insult from opponent
- Display a deck of cards
- Flip over a card
- Remove card from *CARD ARRAY*
- Display flipped over card
- Pass to
 - **Computer Pick function()**

**Computer choice function()**
 - If first pick, choose high/low
 - Else, pick high/low/pass

**Computer Pick function()**
- Display "Picking my card message"
- Record *COMPUTER SELECTION* with
   - **Computer Choice function()**
- If *COMPUTER SELECTION* = High/Low, pass to:
   - **Computer NewCard function()**
- If *COMPUTER SELECTION* = Pass, pass to:
   - **User Intro function()**

**Computer NewCard function()**
- Randomize number to flip over a new card
- Remove card from *CARD ARRAY*
- Decide if *COMPUTER SELECTION* was correct or incorrect
- If *COMPUTER SELECTION* is correct pass to:
 - **Computer Pick function()**
- If *COMPUTER SELECTION* is incorrect pass to:
 - **Computer Incorrect Pick function()**

**Computer Incorrect Pick function()**
- Display "cry of dismay"
- Display drinking image
- Add *NUMBER OF PICKS* to *TOTAL COMPUTER DRINKS*
- Clear cards from screen
- Reset *CARD ARRAY*
- Pass to:
  - **User Intro Function()**


#### Page 3:
**About the team section**
