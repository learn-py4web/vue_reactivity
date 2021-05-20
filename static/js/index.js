// This will be the object that will contain the Vue attributes
// and be used to initialize it.
let app = {};


// Given an empty app object, initializes it filling its attributes,
// creates a Vue instance, and then initializes the Vue instance.
let init = (app) => {

    // This is the Vue data.
    app.data = {
        rows: [],
    };

    app.enumerate = (a) => {
        let k = 0;
        a.map((e) => {e._idx = k++;});
        return a;
    };

    app.add_happiness = function (a) {
        a.map((r) => {
            r.happy = false;
        });
        return a;
    }

    app.toggle_happy = function (r_idx) {
        let r = app.vue.rows[r_idx];
        r.happy = !r.happy;
    };

    app.add = function () {
        let new_row = {}
        new_row.happy = false;
        new_row._idx = app.vue.rows.length;
        app.vue.rows.push(new_row);
    };

    app.methods = {
        add: app.add,
        toggle_happy: app.toggle_happy,
    };

    app.vue = new Vue({
        el: "#vue-target",
        data: app.data,
        methods: app.methods
    });

    // And this initializes it.
    app.init = () => {
        let rows = [{}, {}, {}];
        app.enumerate(rows);
        app.add_happiness(rows);
        app.vue.rows = rows;
    };

    // Call to the initializer.
    app.init();
};

// This takes the (empty) app object, and initializes it,
// putting all the code i
init(app);
