---
title: Performative Transactions
description: Smart Contracts for Artistic Collaboration of Humans and AI Agents in Decentralized Creative Networks
---

## Spaces:

1. A space of variables (for ex. a 3D space of time, duration, and pitch).
2. A space of existing PTs.
3. A space of operators and programming elements (+,-,\*,/,if, else, for, while, etc...)

## Functions:

### Basic:

1. Create a variable (such as time, pitch, duration, etc...)
2. Create a transaction (to create a transaction, one samples from chosen space/spaces).
3. Fire the transaction (with some input to get some output).
4. Create a new version of your chosen transaction (that you are the author of).

### Extended:

5. Automatic data-to-new_transaction transformation - a function that takes in a table of raw numbers and converts it into a table of periodic functions in the form of a Performative Transaction.
6. Data-to-a_list_of_existing_transactions transformation - a function that takes in a table of raw numbers and makes an analysis of that raw data with existing Performative Transactions (creating a new PT).

## Some rules (to be sorted in order)

### 1. Versions:

Once deployed, Performative Transactions (PTs) exist in versions. Each PTs version is non-editable, but every PT has a function to create its new version. This is because PTs can be dependent on each other. This design choice ensures that once one PT is made dependent on a one version of another PT, this version will always be available.

New versions of PTs can only be created by the original author (public key) of that PT.
