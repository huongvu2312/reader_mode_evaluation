# Reader Mode Evaluation <img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License">

This is part of the master thesis of WS23-24 with the topic **"Enhancing Web Accessibility through Browser Customization: A Case Study with Arc Browser"**.

## Installation

Run `npm install` to install the dependencies of the project.

## Files
* `list_unclean.txt`: the scraped links from [Google Chrome's search page](https://www.google.com/search?q=technology&num=100) with extension [Linkclump](https://chromewebstore.google.com/detail/linkclump/lfpjkncokllnfokkgpkobnkbkmelfefj) from Chrome Web Store.
* `list_clean.txt`: the clean list of 188 test links extracted from `list_unclean.txt`.
* `clean_list.py`: the file to extract links from `list_unclean.txt` and put to `list_clean.txt`. To run this file, use the command `python clean_list.py`.
* `detect_reader_mode.js`: the file to extract links that had Mozilla's reader mode from `list_clean.txt` and put to `mozilla_readable_url.txt`. To run this file, use the command `node detect_reader_mode.js`.
* `mozilla_readable_url.txt`: the file that contains links that had reader mode available in Mozilla Firefox. The number began from 2 because it was the row order in the Excel file that contained this link in the project. Link began with "ERROR" needed to be manually tested again to check its availibility.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).


