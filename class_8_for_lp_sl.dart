import 'dart:io';

void main() {
  // TASK TO DO WITH FOR LOOP

  // 3. use for loop to print numbers from 1 to 10
  for (int i = 1; i <= 10; i++) {
    print("number  $i");
  }

  //4.  print even numbers that is from 1- 20

  for (int i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      print("even from 1 - 20 are '$i'");
    }
  }

  // loop through a list
  List<String> fruits = ["apple", "mango", "orange", "banana", "melon"];
  for (int i = 0; i < fruits.length; i++) {
    print(fruits[i]);
  }

  //5. count the number of vowel sound in any word
  String word = "flutter";
  int number_of_vowel_sound = 0;

  for (int i = 0; i < word.length; i++) {
    if ("aeiou".contains(word[i])) {
      number_of_vowel_sound++;
    }
  }
  print("Number of vowels: $number_of_vowel_sound");

  //2.  LOGIN ATTEMPT COUNTER(maximum 3 tries)
  String correctPassword = "1234";
  String enteredPassword = "0000";
  bool isLoggedIn = false;

  for (int attempt = 1; attempt <= 3; attempt++) {
    if (enteredPassword == correctPassword) {
      print("Login Successfully");
      isLoggedIn = true;
      break;
    } else {
      print("Wrong password Attempt $attempt of 3");
    }
  }

  if (!isLoggedIn) {
    print("Account Locked. Too many failed attempts");
  }

  //1.  check all student scored and finds how many students that passed and failed
  List<int> scores = [12, 34, 25, 90, 80, 60, 66, 68, 84, 45, 34, 55, 30, 29];
  for (int i = 0; i < scores.length; i++) {
    if (scores[i] >= 50) {
      print("Student ${i + 1} passed");
    } else {
      print("Student ${i + 1} filed");
    }
  }

  // TASK TO  DO WITH WHILE LOOP

  // create a downloading progress bar that will print the percentage of the download
  int downloaded = 0;
  int total = 100;
  while (downloaded < total) {
    print("Downloading $downloaded% of $total%");
    downloaded++;
    sleep(const Duration(milliseconds: 100));
  }
  print("Download completed!");
}
