define(["require", "exports"], function (require, exports) {
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Aurelia';
            config.map([
                { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
                { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' },
                { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
            ]);
            this.router = router;
        };
        return App;
    })();
    exports.App = App;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiLCJBcHAuY29uZmlndXJlUm91dGVyIl0sIm1hcHBpbmdzIjoiO0lBRUE7UUFBQUE7UUFhQUMsQ0FBQ0E7UUFWQ0QsNkJBQWVBLEdBQWZBLFVBQWdCQSxNQUEyQkEsRUFBRUEsTUFBY0E7WUFDekRFLE1BQU1BLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBO1lBQ3pCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtnQkFDVEEsRUFBRUEsS0FBS0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsU0FBU0EsQ0FBQ0EsRUFBRUEsSUFBSUEsRUFBRUEsU0FBU0EsRUFBT0EsUUFBUUEsRUFBRUEsU0FBU0EsRUFBT0EsR0FBR0EsRUFBRUEsSUFBSUEsRUFBRUEsS0FBS0EsRUFBRUEsU0FBU0EsRUFBRUE7Z0JBQ3ZHQSxFQUFFQSxLQUFLQSxFQUFFQSxPQUFPQSxFQUFVQSxJQUFJQSxFQUFFQSxPQUFPQSxFQUFTQSxRQUFRQSxFQUFFQSxPQUFPQSxFQUFTQSxHQUFHQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxjQUFjQSxFQUFFQTtnQkFDNUdBLEVBQUVBLEtBQUtBLEVBQUVBLGNBQWNBLEVBQUdBLElBQUlBLEVBQUVBLGNBQWNBLEVBQUVBLFFBQVFBLEVBQUVBLGNBQWNBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLGNBQWNBLEVBQUVBO2FBQzdHQSxDQUFDQSxDQUFDQTtZQUVIQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQTtRQUN2QkEsQ0FBQ0E7UUFDSEYsVUFBQ0E7SUFBREEsQ0FiQSxBQWFDQSxJQUFBO0lBYlksV0FBRyxNQWFmLENBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXIsIFJvdXRlckNvbmZpZ3VyYXRpb259IGZyb20gJ2F1cmVsaWEtcm91dGVyJ1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgcm91dGVyOiBSb3V0ZXI7XG5cbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbiwgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICBjb25maWcudGl0bGUgPSAnQXVyZWxpYSc7XG4gICAgY29uZmlnLm1hcChbXG4gICAgICB7IHJvdXRlOiBbJycsICd3ZWxjb21lJ10sIG5hbWU6ICd3ZWxjb21lJywgICAgICBtb2R1bGVJZDogJ3dlbGNvbWUnLCAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdXZWxjb21lJyB9LFxuICAgICAgeyByb3V0ZTogJ3VzZXJzJywgICAgICAgICBuYW1lOiAndXNlcnMnLCAgICAgICAgbW9kdWxlSWQ6ICd1c2VycycsICAgICAgICBuYXY6IHRydWUsIHRpdGxlOiAnR2l0aHViIFVzZXJzJyB9LFxuICAgICAgeyByb3V0ZTogJ2NoaWxkLXJvdXRlcicsICBuYW1lOiAnY2hpbGQtcm91dGVyJywgbW9kdWxlSWQ6ICdjaGlsZC1yb3V0ZXInLCBuYXY6IHRydWUsIHRpdGxlOiAnQ2hpbGQgUm91dGVyJyB9XG4gICAgXSk7XG5cbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
