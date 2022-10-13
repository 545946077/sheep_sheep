<template>
	<view class="back">
		<view class="content">
			<view class="item" v-for="(item,index) in list" :key="item.id"
				:style="'position: absolute;left:'+item.x+'rpx;top:'+item.y+'rpx;z-index:'+item.z+';'"
				@click="onClick(item,index)">
				<image :src="'../../static/ylgy/'+item.value.url" mode="" class="img"></image>
				<view class="zzc" v-if="item.active" @click.stop=""></view>
			</view>
			<view class="eliminate" ref="eliminate">
				<view class="item eliminateItem" v-for="(item,index) in eliminateList" :key="item.id"
					:style="'position: absolute;left:'+item.x+'rpx;top:'+item.y+'rpx;z-index:'+item.z+';'">
					<image :src="'../../static/ylgy/'+item.value.url" mode="" class="img"></image>
				</view>
			</view>
		</view>

		<view class="prop">
			<view class="li" @click="out">
				退三张
			</view>
			<view class="li" @click="shuffle">
				洗牌
			</view>
		</view>
		<view class="pop" v-if="show">
			<view class="title">游戏{{result?'成功':'失败'}}</view>
			<view class="button" v-if="!result" @click="out();show=false">免费复活</view>
			<view class="button" @click="init()">重新挑战</view>
			<view class="button" @click="toIndex">回到首页</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				list: [], //卡牌列表
				eliminateList: [], //下方卡槽列表
				hierarchy: 10, //层数
				number: 30, //每层数量
				valueList: [], //卡牌内容
				show: false, //结算界面
				result: false, //游戏结果
				innerAudioContext: null, //背景音
				innerAudioContext2: null, //点击音
				innerAudioContext3: null, //消除音
			}
		},
		onLoad() {
			this.init()
			this.innerAudioContext = uni.createInnerAudioContext();
			this.innerAudioContext.sessionCategory = 'ambient'
			this.innerAudioContext.src = '../../static/ylgy/back.mp3';
			this.innerAudioContext.loop = true
			this.innerAudioContext2 = uni.createInnerAudioContext();
			this.innerAudioContext2.sessionCategory = 'ambient'
			this.innerAudioContext2.src = '../../static/ylgy/click.mp3';
			this.innerAudioContext3 = uni.createInnerAudioContext();
			this.innerAudioContext3.sessionCategory = 'ambient'
			this.innerAudioContext3.src = '../../static/ylgy/eliminate.mp3';
		},
		onShow() {
			this.innerAudioContext.play()
		},
		onHide() {
			this.innerAudioContext.pause()
		},
		methods: {
			//初始化
			init() {
				this.list = [];
				this.eliminateList = [];
				this.show = false;
				this.valueList = [{
						id: 1,
						url: 'Pet10501.png'
					},
					{
						id: 2,
						url: 'Pet10504.png'
					},
					{
						id: 3,
						url: 'Pet10507.png'
					},
					{
						id: 4,
						url: 'Pet10509.png'
					},
					{
						id: 5,
						url: 'Pet20501.png'
					},
					{
						id: 6,
						url: 'Pet20502.png'
					},
					{
						id: 7,
						url: 'Pet20503.png'
					},
					{
						id: 8,
						url: 'Pet20506.png'
					},
					{
						id: 9,
						url: 'Pet40502.png'
					},
					{
						id: 10,
						url: 'Pet40505.png'
					},
				]
				let valueList = [...new Array(this.hierarchy * this.number).keys()]
				valueList = valueList.map((item, index) => {
					return this.valueList[index % 10]
				})
				valueList.sort(function() {
					return Math.random() - 0.5
				})
				let num = 0
				for (var j = 0; j < this.hierarchy; j++) {
					let xx = j % 2 == 1 ? 36 : 49
					let arr = [...new Array(xx).keys()]
					arr.sort(function() {
						return Math.random() - 0.5
					})
					arr.length = this.number
					for (var i = 0; i < xx; i++) {
						if (arr.includes(i)) {
							let items
							if (j % 2 == 1) {
								items = {
									id: j + '' + i,
									value: valueList[num],
									x: (i % 6 * 102) + 50,
									y: (Math.trunc(i / 6) * 102) + 50,
									z: this.hierarchy - j,
									position: [j, i % 6, Math.trunc(i / 6)]
								}
							} else {
								items = {
									id: j + '' + i,
									value: valueList[num],
									x: i % 7 * 102,
									y: Math.trunc(i / 7) * 102,
									z: this.hierarchy - j,
									position: [j, i % 7, Math.trunc(i / 7)]
								}
							}
							this.list.push(items)
							num++
						}
			
					}
				}
				this.refresh()
			},
			//洗牌
			shuffle() {
				let list = this.list.map(item => {
					if (!item.isProp) {
						return item.value
					}
				})
				list.sort(function() {
					return Math.random() - 0.5
				})
				this.list.forEach((item, index) => {
					if (!item.isProp) {
						item.value = list[index]
					}
				})
			},
			//退三张
			out() {
				for (var i = 0; i < 3; i++) {
					let item = this.eliminateList[0]
					if (item) {
						item.z = 0
						this.list.push(item)
						this.eliminateList.splice(0, 1)
						this.move(item, i)
					}
				}
				this.refreshSlot()
			},
			move(item, i) {
				setTimeout(() => {
					item.x = 220 + i * 102
					item.y = 850
					item.position = [20, 20, 20]
					item.isProp = true
				}, 80)

			},
			//刷新卡牌阴影
			refresh() {
				this.list.forEach(item => {
					item.active = this.isCover(item)
				})
			},
			//判断卡牌是否被覆盖
			isCover(item) {
				let { position } = item
				let is = false
				this.list.forEach(t => {
					if (t.position[0] < position[0] && t.position[0] % 2 != position[0] % 2) {
						if (position[0] % 2 == 0) {
							//第一层
							if (position[1] - t.position[1] == 0 || position[1] - t.position[1] == 1) {
								if (position[2] - t.position[2] == 0 || position[2] - t.position[2] == 1) {
									is = true
								}
							}
						} else {
							//第二层
							if (t.position[1] - position[1] == 0 || t.position[1] - position[1] == 1) {
								if (t.position[2] - position[2] == 0 || t.position[2] - position[2] == 1) {
									is = true
								}

							}
						}
					}
				})
				return is
			},
			//回到首页
			toIndex() {
				this.innerAudioContext.stop()
				uni.redirectTo({
					url: '/pages/index/index'
				});
			},
			//刷新消除卡槽的卡牌位置
			refreshSlot(item, index) {
				this.eliminateList.forEach((t, i) => {
					t.z = 100
					t.y = 1000
					t.x = i * 102
				})
				if (item && this.eliminateList.filter(t => t.value.id == item.value.id).length >= 3) {
					setTimeout(() => {
						this.eliminateList.splice(index - 1, 3)
						this.refreshSlot(item)
						this.innerAudioContext3.play()
					}, 300)
				}
			},
			//从后往前查找最后一张相同的卡牌
			_findIndex(arr, key, value) {
				for (var i = arr.length; i--;) {
					if (arr[i][key].id == value.id) {
						return i;
					}
				}
				return -1;
			},
			//卡牌点击事件
			onClick(item, index) {
				let lastIndex = this._findIndex(this.eliminateList, 'value', item.value)
				if (lastIndex < 0) {
					this.eliminateList.push(item)
				} else {
					this.eliminateList.splice(lastIndex + 1, 0, item)
				}
				this.list.splice(index, 1) 
				this.refresh()
				setTimeout(() => {
					this.refreshSlot(item, lastIndex)
					this.gameOver(item)
				}, 80)
				this.innerAudioContext2.play()
			},
			//游戏结束
			gameOver(item) {
				if (this.eliminateList.length >= 7 && this.eliminateList.filter(t => t.value.id == item.value.id).length <
					3) {
					this.result = false
					this.show = true
					return
				}
				if (this.list.length == 0) {
					this.result = true
					this.show = true
				}
			},
		}
	}
</script>

<style scoped>
	view {
		box-sizing: border-box;
	}

	.back {
		background-color: #c3fe8b;
		overflow: hidden;
		min-height: 100vh;
	}

	.content {
		width: 700rpx;
		margin: 100rpx auto;
		padding-top: 1000rpx;
		position: relative;
	}

	.item {
		width: 100rpx;
		height: 100rpx;
		background-color: #f5ffcd;
		border: 2rpx solid #000;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all .3s;
		position: relative;
		box-shadow: 0 12rpx 0 #72a211;
		border-radius: 15rpx;
	}

	.img {
		width: 90%;
		height: 90%;
	}

	.zzc {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		background-color: rgba(0, 0, 0, .5);
	}

	.eliminate {
		width: 700rpx;
		height: 117rpx;
		border: 1px solid #000;
	}


	.prop {
		display: flex;
		justify-content: space-around;
		margin-top: 50rpx;
	}

	.prop .li {
		width: 150rpx;
		height: 100rpx;
		background-color: #22a4ff;
		border: 1px solid #000;
		border-radius: 10rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ffda0e;
		font-weight: bold;
		font-size: 30rpx;
		box-shadow: 0 6px 0 #1580ca;
	}

	.pop {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, .7);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.title {
		color: #fff;
		font-size: 60rpx;
	}

	.button {
		width: 300rpx;
		height: 100rpx;
		display: flex;
		margin: 30rpx auto;
		align-items: center;
		justify-content: center;
		font-size: 40rpx;
		background-color: #048f8e;
		color: #fff;
	}
</style>
