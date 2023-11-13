import dashboardReducer, {addToStarred, removeFromStarred, setCurrent, setFilter} from "../../Features/State/slice";
describe('Dashboard Slice',()=>{
    describe("reducers",()=>{
        describe('setCurrent',()=>{
            it('should set the current dashboard',()=>{
                const initialState = undefined;
                const id = 'fxasd';
                const action = setCurrent(id)
                const result = dashboardReducer(initialState, action);
                console.log(result);
                expect(result.current).toEqual(id);
            })
        })

        describe('setFilter',()=>{
            it('should set the filter keyword',()=>{
                const initialState = undefined;
                const keyword = 'VISUALIZATION';
                const action = setFilter(keyword)
                const result = dashboardReducer(initialState, action);
                console.log(result);
                expect(result.filter).toEqual(keyword);
            })
        })

        describe('addToStarred',()=>{
            it('should add dashboard Id to the starred list',()=>{
                const initialState = undefined;
                const id='DashboardID';
                const action = addToStarred(id)
                let result = dashboardReducer(initialState, action);
                expect(result.starred).toContain(id)
            })

            it('should not add the dashboard item again',()=>{
                const initialState = undefined;
                const id='DashboardID';
                const action = addToStarred(id)
                let result = dashboardReducer(initialState, action);
                result = dashboardReducer(initialState, action);
                expect(result.starred).toContain(id)
                expect(result.starred.length).toEqual(1)
            })

            it('should allow adding multiple different items',()=>{
                const initialState = undefined;
                const ids=['DashboardID','DashboardID2'];
                const action = addToStarred(ids[0])
                const action2 = addToStarred(ids[1])
                let result = dashboardReducer(initialState, action);
                result = dashboardReducer(result, action2);
                expect(result.starred).toContain(ids[0])
                expect(result.starred).toContain(ids[1])
                expect(result.starred.length).toEqual(ids.length)
            })
        })

        describe('removeFromStarred',()=>{
            it('should remove the id from starred list',()=>{
                const ids=['DashboardID','DashboardID2'];
                const initialState = {starred:ids, loading:false};
                const action = removeFromStarred(ids[1])
                const result = dashboardReducer(initialState, action);
                expect(result.starred.length).toEqual(1);
                expect(result.starred).not.toContain(ids[1]);
            })
        })
    })
})