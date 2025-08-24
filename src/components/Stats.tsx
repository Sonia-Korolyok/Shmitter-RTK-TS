import Avatar from "./Avatar.tsx";
import {changeStats} from "../features/stats/statsSlice.ts";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {StatsType} from "../utils/types.d";

const Stats = () => {
    const {followers, following} = useAppSelector(state => state.stats);
    const {name} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {name}
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => dispatch(changeStats(StatsType.FOLLOWERS, 1 ))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats(StatsType.FOLLOWERS, -1));
                    }}
                >Followers: {followers}</div>
                <div
                    onClick={() => dispatch(changeStats( StatsType.FOLLOWING, 1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats(StatsType.FOLLOWING, -1));
                    }}
                >Following: {following}</div>
            </div>
        </div>
    );
};

export default Stats;