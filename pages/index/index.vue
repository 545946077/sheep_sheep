<template>
	<view>
		<view class="button" @click="toGame">开始游戏</view>
		<view class="button" @click="toIndex">退出游戏</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toIndex(){
				if (uni.getSystemInfoSync().platform == 'ios'){
				    plus.ios.import("UIApplication").sharedApplication().performSelector("exit")
				} else if (uni.getSystemInfoSync().platform == 'android'){
				    plus.runtime.quit();
				}
			},
			toGame(){
				uni.redirectTo({
					url: `/pages/game/game`
				});
			}
		}
	}
</script>

<style scoped>
.button {
		width: 300rpx;
		height: 100rpx;
		display: flex;
		margin: 50rpx auto;
		align-items: center;
		justify-content: center;
		font-size: 40rpx;
		background-color: #048f8e;
		color: #fff;
	}
</style>
