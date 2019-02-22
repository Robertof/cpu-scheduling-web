# CPU scheduling app - Web edition

## Synopsis

This app allows to easily configure and plot processes using the following scheduling algorithms:

- [First-come, first-served (FCFS)](https://en.wikipedia.org/wiki/FIFO_\(computing_and_electronics\))
- [Shortest Job First (SJF, pre-emptive and non pre-emptive)](https://en.wikipedia.org/wiki/Shortest_job_next)
- [Round Robin](https://en.wikipedia.org/wiki/Round-robin_scheduling)

The codebase is modular and well-documented, more scheduling algorithms can be easily added.

**NOTE:** since this was an university project, the app is currently only in Italian.

Please checkout the [main code repository](https://github.com/Robertof/cpu-scheduling-src) and the
[Electron app](https://github.com/Robertof/cpu-scheduling-electron).

A live demo is available [here](https://robertof.ovh/cpu-scheduling/).

## Building and packaging

``` bash
# install dependencies
yarn

# run for development
yarn serve

# build for production
yarn build
```
