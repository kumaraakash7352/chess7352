# 🧩 chess7352

A C++ implementation of a chess engine and playable game. This project supports basic chess mechanics, turn-based play, and is structured to allow future enhancements like AI, GUI, or networked multiplayer.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🧠 Overview

This is a basic but extendable chess game built in C++. It includes the core chess rules and board setup, supports player vs player interaction via the command line, and is designed as a foundation for building more advanced chess applications.

---

## ✨ Features

- Full support for all chess pieces (pawn, rook, knight, bishop, queen, king)
- Legal move validation and turn management
- Command-line interface (CLI) play
- Basic board display
- Ready for future AI or GUI integration

---

## 🚀 Getting Started

### Prerequisites

- A C++17 compatible compiler (e.g., `g++`, `clang++`)
- [Optional] CMake if using the build system

### Installation

```bash
# Clone the repository
git clone https://github.com/kumaraakash7352/chess7352.git
cd chess7352

# Compile the program
g++ -std=c++17 -O2 *.cpp -o chess7352
```

Or if you have CMake support:

```bash
mkdir build && cd build
cmake ..
make
```

---

## 🎮 Usage

To start the chess game:

```bash
./chess7352
```

Follow the in-terminal prompts to begin playing. Additional modes (e.g., AI, load from FEN) can be added in the future.

---

## 📂 Project Structure

```
chess7352/
├── board.cpp / .h       # Board and position logic
├── pieces.cpp / .h      # Piece classes and rules
├── main.cpp             # Game loop and controller
├── utils.cpp / .h       # Helpers for display, validation, etc.
├── CMakeLists.txt       # CMake build script (optional)
└── README.md            # This file
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

Please ensure your code is clean and well-commented.

---

## 📜 License

This project is licensed under the MIT License. See `LICENSE` for details.

---

## 📬 Contact

For any questions or feedback, feel free to reach out:

- GitHub: [kumaraakash7352](https://github.com/kumaraakash7352)


---
