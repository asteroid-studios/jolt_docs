---
sidebar_position: 3
sidebar_label: "Architecture"
---

# MVP Architecture

> ### MVP is a code architecture consisting of Models, Views and Providers.

---

The main concept is that **Models respresent data** in a system/database.

These **Models are used** when fetching and updating data, which is done **by Providers**.

The **Providers can pass** updated data on **to Views**.

Then, **Views can pass** actions up **to Providers**, such as updating the data.

**Views and models never change data directly.**

---

:::note
This architecture is also known as Model-View-Presenter, more information [**here**](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93presenter).
:::
