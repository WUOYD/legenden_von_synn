<template>
<div class="content sequencer">
    <h1>Map</h1>
    <div id="currentIsland">
        <p>Aktuelle Insel: {{ currentIsland }}</p>
    </div>
    <div id="islands">
        <div class="island" v-if="currentIsland == 'Nythoria' || currentIsland == 'Aridora' || currentIsland == 'Elysora'" @click="acceptChoice(0)">
            <img :src="islands[0][2]"/>
            <p>Frosgar</p>
        </div>
        <div class="island" v-if="currentIsland == 'Frosgar' || currentIsland == 'Athos' || currentIsland == 'Elysora'" @click="acceptChoice(1)">
            <img :src="islands[1][2]"/>
            <p>Aridora</p>
        </div>
        <div class="island" v-if="currentIsland == 'Aridora' || currentIsland == 'Drakan' || currentIsland == 'Elysora'" @click="acceptChoice(2)">
            <img :src="islands[2][2]"/>
            <p>Athos</p>
        </div>
        <div class="island" v-if="currentIsland == 'Athos' || currentIsland == 'Talvar' || currentIsland == 'Elysora'" @click="acceptChoice(3)">
            <img :src="islands[3][2]"/>
            <p>Drakan</p>
        </div>
        <div class="island" v-if="currentIsland == 'Drakan' || currentIsland == 'Nythoria' || currentIsland == 'Elysora'" @click="acceptChoice(4)">
            <img :src="islands[4][2]"/>
            <p>Talvar</p>
        </div>
        <div class="island" v-if="currentIsland == 'Talvar' || currentIsland == 'Frosgar' || currentIsland == 'Elysora'" @click="acceptChoice(5)">
            <img :src="islands[5][2]"/>
            <p>Nythoria</p>
        </div>
        <div class="island" v-if="currentIsland !== 'Elysora'" @click="acceptChoice(6)">
            <img :src="islands[6][2]"/>
            <p>Elysora</p>
        </div>
    </div>
    <div v-if="acceptChoicePopUp == true" id="changeRegionPopUp">
        <img :src="travelDestinationPicture" />
        <div class="overlay-content">
            <p>Möchtest du wirklich auf {{ travelDestinationText }} reisen?</p>
            <div id="buttons">
                <button @click="acceptedChoice()">Annehmen</button>
                <button @click="deniedChoice()">Ablehnen</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    socket
} from '../client'

export default {
    data() {
        return {
            acceptChoicePopUp: false,
            currentIsland: null,
            travelDestination: null,
            travelDestinationText: null,
            travelDestinationPicture: null,
            islands: [
                [1, "Frosgar", "src/assets/img/islands/frosgar.webp"],
                [2, "Aridora", "src/assets/img/islands/aridora.webp"],
                [3, "Athos", "src/assets/img/islands/athos.webp"],
                [4, "Drakan", "src/assets/img/islands/drakan.webp"],
                [5, "Talvar", "src/assets/img/islands/talvar.webp"],
                [6, "Nythoria", "src/assets/img/islands/nythoria.webp"],
                [7, "Elysora", "src/assets/img/islands/elysora.webp"],
            ]
        }
    },
    mounted() {
        socket.on("currentRegion", activePlayer => {
            this.currentIsland = activePlayer.region;
        })
        socket.on("updatePlayer", activePlayer => {
            this.currentIsland = activePlayer.region;
        })
        socket.emit("getActivePlayer");
    },
    methods: {
        acceptChoice(island) {
            this.acceptChoicePopUp = true
            this.travelDestination = this.islands[island][0];
            this.travelDestinationText = this.islands[island][1];
            this.travelDestinationPicture = this.islands[island][2];
        },
        acceptedChoice() {
            socket.emit("updateActions", "changeIsland");
            this.changeRegion(this.travelDestination);
            this.acceptChoicePopUp = false
        },
        deniedChoice() {
            this.acceptChoicePopUp = false
        },
        changeRegion(region) {
            if (region == 7) {
                socket.emit("changeRegion", region);
                socket.emit("updateView", 7);
                socket.emit("getActivePlayer");
                
            } else {
                socket.emit("changeRegion", region);
                socket.emit("updateView", 2);
                socket.emit("getActivePlayer");
            }
        }
    }
}
</script>

<style>

</style>
